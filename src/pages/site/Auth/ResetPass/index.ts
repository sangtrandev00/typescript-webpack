import Component from '../../../../components/base-component';
import Input from '../components/Input';
import Button from '../components/Button';
import { autobind } from '../../../../decorators/autobind';
import AuthApi from '../../../../api/authApi';
import Router from '../../../../router/router';

// @ts-ignore
import JustValidate from 'just-validate';

const ButtonEl = new Button('submit', 'UPDATE');
const PasswordInput = new Input('password', 'password', 'password', 'Password', '', 'Password');

const templateHTML = `
    <div id="login-content">
    <section class="h-screen">
        <div class="h-full">
            <!-- Left column container with background-->
            <div
                class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between shadow-md border-2 px-10">
                <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="w-full bgk-tertiary-color" alt="Sample image" />
                </div>

                <!-- Right column container -->
                <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                    <form id="reset-password-form">
                        <!--Sign in section-->
                        <div class="flex flex-row items-center justify-center lg:justify-start">
                            <p class="mb-4 mr-4 text-lg">Your new password</p>

                        </div>

                        <!-- Email input -->
                    ${PasswordInput.render()}

                        <!-- Login button -->
                        <div class="text-center lg:text-left">
                         ${ButtonEl.render()}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>

`;

export default class ResetPass extends Component<HTMLDivElement> {
  resetFormEl: HTMLFormElement;
  validator: any;

  constructor() {
    super('main');
    this.hostEl.innerHTML = templateHTML;
    this.resetFormEl = document.getElementById('reset-password-form') as HTMLFormElement;
    this.formValidator('reset-password-form');
    this.attach();
  }

  attach() {
    this.resetFormEl.addEventListener('submit', this.createNewPasswordHandler);
  }

  @autobind
  createNewPasswordHandler(e: Event) {
    e.preventDefault();

    (async () => {
      try {
        const url = new URL(location.href);
        const passwordToken = url.searchParams.get('token');
        const formEl = e.target as HTMLFormElement;
        const formEls = formEl.elements as unknown as { [key: string]: HTMLInputElement };
        const password = formEls['password'].value;

        const { userId } = JSON.parse(localStorage.getItem('user') as string);

        if (!this.validator.isValid) return;

        const response = await AuthApi.updatePassword({ password, passwordToken, userId });

        if (response) {
          // Change to another method!!
          // Define a function here to reuse!!!
          const redirectTimer = Date.now() + 5 * 1000;
          alert(`Chuyển trang sau 3s`);
          const timeInterval = setInterval(() => {
            // Render to UI here!!! when have enough time!!!
            console.log('Redirect after: ', Math.trunc((redirectTimer - Date.now()) / 1000));

            if (Math.trunc((redirectTimer - Date.now()) / 1000) <= 0) {
              history.pushState(null, '', `/login`);
              new Router();
              clearInterval(timeInterval);
            }
          }, 1000);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }

  formValidator(formId: string) {
    this.validator = new JustValidate(`#${formId}`, {
      validateBeforeSubmitting: true,
    });

    this.validator.addField('#password', [
      {
        rule: 'required',
      },
      {
        rule: 'strongPassword',
      },
    ]);
  }
}
