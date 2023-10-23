import Input from '../components/Input';
import Button from '../components/Button';
import Component from '../../../../components/base-component';
import { autobind } from '../../../../decorators/autobind';
import AuthApi from '../../../../api/authApi';

// @ts-ignore
import JustValidate from 'just-validate';

const EmailInput = new Input('email', 'email', 'email', 'Email Address', '', 'Email Address');
const ButtonEl = new Button('submit', 'RESET');

const templateHTML = `
<div id="forgot-content">
<section class="h-screen">
    <div class="h-full">
        <!-- Left column container with background-->
        <div
            class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between shadow-md border-2 px-10">
            <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    class="w-full bg-tertiary-color" alt="Sample image" />
            </div>

            <!-- Right column container -->
            <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                <form id="reset-form">
                    <!--Sign in section-->
                    <div class="flex flex-row items-center justify-center lg:justify-start">
                        <p class="mb-4 mr-4 text-lg">Enter Email to reset password!</p>

                    </div>

                    <!-- Email input -->
                   ${EmailInput.render()}

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

export default class Reset extends Component<HTMLDivElement> {
  resetFormEl: HTMLFormElement;
  validator: any;

  constructor() {
    super('main');
    this.hostEl.innerHTML = templateHTML;

    this.resetFormEl = document.getElementById('reset-form') as HTMLFormElement;
    this.formValidator('reset-form');
    this.attach();
  }

  attach() {
    this.resetFormEl.addEventListener('submit', this.resetPasswordHandler);
  }

  @autobind
  resetPasswordHandler(e: Event) {
    e.preventDefault();

    const formEls = e.target as unknown as { [key: string]: HTMLInputElement };

    const email = formEls['email'].value;

    const rootUrl = window.location.origin;

    const resetPassUrl = `${rootUrl}/reset`;

    if (!this.validator.isValid) return;

    (async () => {
      try {
        const isExistingRes = await AuthApi.checkExisingUser({ email, providerId: 'local' });

        if (isExistingRes.data.result === 'not found') {
          alert('Email not found at this website');
          this.validator.showErrors({ '#email': 'Email not found at this website' });
          return;
        }

        const response = await AuthApi.sendEmailReset({ email, resetPassUrl });
        const {
          user: { _id },
        } = response.data;

        localStorage.setItem(
          'user',
          JSON.stringify({
            email,
            userId: _id,
          }),
        );

        alert('Check your email to reset your password!');
      } catch (error) {
        //   console.log(error?.response.status);
        //   if (error.response.status === 402) {
        //     showToast("");
        //   }
        alert(error);
        console.log(error);
      }
    })();
  }

  formValidator(formId: string) {
    this.validator = new JustValidate(`#${formId}`, {
      validateBeforeSubmitting: true,
    });

    this.validator.addField('#email', [
      {
        rule: 'required',
      },
      {
        rule: 'email',
      },
    ]);
  }
}
