import Input from "../components/Input";
import Button from "../components/Button";
import Component from "../../../../components/base-component";
import { autobind } from "../../../../decorators/autobind";
import AuthApi from "../../../../api/authApi";
import Router from "../../../../router/router";

// @ts-ignore
import JustValidate from 'just-validate';

const EmailInput = new Input("email","email", "email", "Email Address", "", "Email Address");
const NameInput = new Input("name", "text", "name", "Full Name", "", "Full Name");
const PasswordInput = new Input("password","password", "password", "Password", "", "Password");
const RePasswordInput = new Input("repassword", "password", "repassword", "Re-Password", "", "Re-Password");
const ButtonEl = new Button("submit", "SIGNUP");

const templateHTML = `

    <div id="signup-content">
    <section class="mt-8">
        <div class="h-full">
            <!-- Left column container with background-->
            <div
                class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between shadow border px-4 md:p-10 mb-10">
                <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="w-full" alt="Sample image" />
                </div>

                <!-- Right column container -->
                <div class="mb-12 md:mb-0 w-10/12 md:w-8/12 lg:w-5/12 xl:w-5/12">
                    <form id="signup-form" action="" method="">
                        <!--Sign in section-->
                        <div class="flex flex-row items-center justify-center lg:justify-start mb-4">
                            <p class="mb-0 mr-4 text-lg">Sign up with</p>

                        </div>


                        <!-- Email input -->
                        ${EmailInput.render()}

                        <!-- Fullname input -->
                        ${NameInput.render()}

                        <!-- Password input -->
                        ${PasswordInput.render()}

                        <!-- Password input -->
                        ${RePasswordInput.render()}

                        <div class="mb-6 flex items-center justify-between">
                            <!-- Remember me checkbox -->
                            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                <input
                                    class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-slate-600 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-slate-600 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox" value="" id="exampleCheck2" />
                                <label class="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    for="exampleCheck2">
                                    Remember me
                                </label>
                            </div>

                        </div>

                        <!-- Login button -->
                        <div class="text-center lg:text-left">
                          ${ButtonEl.render()}

                            <!-- Register link -->
                            <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                                Already have an account?
                                <a id="navigateLogin" href="./login"
                                    class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
`

export default class Signup extends Component<HTMLDivElement>{
    validator: any;
    signupFormEl: HTMLFormElement;
    navigateLoginBtn: HTMLAnchorElement;
    constructor() {
        super('main');
        this.hostEl.innerHTML = templateHTML;

        this.signupFormEl = document.getElementById('signup-form') as HTMLFormElement;
        this.navigateLoginBtn = document.getElementById('navigateLogin') as HTMLAnchorElement;
        this.formValidator("signup-form");
        this.attach();

    }

    attach() {
        this.signupFormEl.addEventListener('submit', this.signupHandler);
        this.navigateLoginBtn.addEventListener('click', this.navigateLoginHandler);   
    }

    @autobind
    signupHandler(e: Event){
   
          e.preventDefault();
          const formEl = e.target as HTMLFormElement;

            (async () => {
               
                try {
                    const elements = formEl.elements as unknown as {[key: string]: HTMLInputElement};

                    console.log(elements);

                    const email = elements["email"].value;
                    const fullName = elements["name"].value;
                    const password = elements["password"].value;
                    const repassword = elements["repassword"].value;
                
                if (password !== repassword) {
                  console.log("Please enter re password again!");
            
                  // Validate here
                  return;
                }
            
                const user = {
                  email,
                  name: fullName,
                  password,
                  role: "client",
                  providerId: "local"
                };

                console.log(this.validator);

                if(!this.validator.isValid) return;
            
                const authResponse = await AuthApi.signup(user);
                const { message, userId } = authResponse.data;
    
                console.log(message, userId);
            
                if (userId) {
                  history.pushState(null, '', `/login`);
                  new Router();
                }
                
                } catch (error) {
                 console.log(error);
                 
                 const errorType = (error as any).response.data.errorType;
                 const errorMessage = (error as any).response.data.message;
 
                 console.log(errorType);
                 console.log(errorMessage);
 
                 if(errorType === "email") {
                     this.validator.showErrors({"#email": errorMessage});
                 }

                }

            })()

      };

    navigateLoginHandler(e: Event) {
        e.preventDefault();
        history.pushState(null, '', `/login`);
        new Router();
    }

    formValidator(formId: string) {

        this.validator = new JustValidate(`#${formId}`, {
            validateBeforeSubmitting: true,
        })

        this.validator
            .addField("#email", [
                {
                    rule: "required",
                },
                 {
                    rule: "email",
                 }
            ])
            .addField("#name", [
                {
                    rule: "required",
                }
                , 
                {
                    rule: "minLength",
                    value: 8
                }
            ])
            .addField("#password", [
                {
                    rule: "required",
                }
                , 
                {
                    rule: "strongPassword",
                }
            ])
            .addField("#repassword", [
                {
                    rule: "required",
                }, 
                {
                    validator: (value: string, fields: { [key: string]: { elem: HTMLInputElement} }) => {

                        if(fields["#password"] && fields["#password"].elem) {
                            const repeatPasswordVal = fields["#password"].elem.value;
                            return value === repeatPasswordVal;
                        }
                        return true;
                    },
                    errorMessage: "Passwords do not match!"
                }
            ])
    }

}