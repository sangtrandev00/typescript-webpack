import Input from "../components/Input";
import Button from "../components/Button";
import DecorBackground from "../components/DecorBackground";
import Component from "../../../../components/base-component";
import { autobind } from "../../../../decorators/autobind";
import AuthApi from "../../../../api/authApi";
import Router from "../../../../router/router";
import Auth from '../../Auth';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../../firebase/firebase-config";

// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../../../../firebase/firebase-config";
// import AuthApi from "../../../../api/authApi";

const EmailInput = new Input('email', 'email', 'email', 'Email Address', "", "Email address");
const PasswordInput = new Input('password','password', 'password', 'Password', "", "Password");
const ButtonEl  = new Button('submit', "LOGIN");
const DecorBackgroundEl = new DecorBackground("https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp", "Login Background");
const templateHTML = `
<div id="login-content ">
<section class="mt-8">
    <div class="h-full pb-10">
        <!-- Left column container with background-->
        <div
            class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between shadow border p-10">
            ${DecorBackgroundEl.render()}

            <!-- Right column container -->
            <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                <form id="login-form" action="" method="">
                    <!--Sign in section-->
                    <div
                        class="flex flex-row items-center justify-center lg:justify-start flex-wrap text-center">
                        <p class="mr-4 text-lg w-full">Sign in with</p>

                        <!-- Facebook login -->
                        <div id="facebook-signin-btn"
                            class="fb-login-button w-full rounded-lg my-3 text-center" data-width="100"
                            data-size="large" data-button-type="" data-layout="rounded"
                            data-use-continue-as="false" data-scope="public_profile,email"
                            data-onlogin="checkLoginState()"></div>

                        <!-- Google -->
                        <button id="google-signin-btn" type="button" data-te-ripple-init
                            data-te-ripple-color="light"
                            class="text-center mx-auto bg-[#C7544B] text-white px-1 py-1 w-[240px] rounded-[2rem] text-lg flex- justify-between">
                            <!-- Google icon -->
                            <i class="fa-brands fa-google me-2"></i> <span>Login With Google</span>
                        </button>

                    </div>

                    <!-- Separator between social media sign in and email/password sign in -->
                    <div
                        class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p class="mx-4 mb-0 text-center font-semibold dark:text-white">
                            Or
                        </p>
                    </div>

                    <!-- Email input -->
                    ${EmailInput.render()}

                    <!-- Password input -->
                    ${PasswordInput.render()}

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

                        <!--Forgot password link-->
                        <a id="navigateForgot" href="./forgot">Forgot password?</a>
                    </div>

                    <!-- Login button -->
                    <div class="text-center lg:text-left">
                       ${ButtonEl.render()}

                        <!-- Register link -->
                        <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                            Don't have an account?
                            <a id="linkRegister" href="./signup"
                                class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</div>
`;

// @ts-ignore
import JustValidate from 'just-validate';

export default class Login extends Component<HTMLDivElement>{

    loginFormEl: HTMLFormElement;
    linkRegisterEl: HTMLLinkElement;
    linkForgotEl: HTMLLinkElement;
    googleSignInBtn: HTMLButtonElement;
    validator: any;

    constructor() {
        super('main');
        this.hostEl.innerHTML = templateHTML;
        this.loginFormEl = document.getElementById('login-form') as HTMLFormElement;
        this.linkRegisterEl = document.getElementById('linkRegister') as HTMLLinkElement;
        this.linkForgotEl = document.getElementById('navigateForgot') as HTMLLinkElement;
        this.googleSignInBtn = document.getElementById('google-signin-btn') as HTMLButtonElement;
        this.formValidator('login-form');
        this.attach();
    }

    attach() {
        this.loginFormEl.addEventListener('submit', this.loginHandler);
        this.linkRegisterEl.addEventListener('click', this.navigateHandler);
        this.linkForgotEl.addEventListener('click', this.navigateHandler);
        this.googleSignInBtn.addEventListener('click', this.signInWithGoogle);
    }
    
    @autobind
    loginHandler(e: Event) {
        e.preventDefault();

        const formEls = e.target as unknown as {[key: string]: HTMLInputElement};
        const email = formEls["email"].value;
        const password = formEls["password"].value;

        const user = {
            email,
            password,
        };

        if(!this.validator.isValid) return;

        (async() => {
            try {
        
                const authResponse = await AuthApi.login(user);
                const {token, userId } = authResponse.data;
                const expiryDate = new Date(Date.now() + 60 * 60 * 1000);

                localStorage.setItem("userId", userId);
                localStorage.setItem("token", token);
                localStorage.setItem("expiryDate", expiryDate.toString());
        
                history.pushState(null,'' , `/`);
                new Router();
                const userAuth = new Auth();
                userAuth.login();

            } catch (error) {
                console.log(error);

                const errorType = (error as any).response.data.errorType;
                const errorMessage = (error as any).response.data.message;

                console.log(errorType);
                console.log(errorMessage);

                if(errorType === "email") {
                    this.validator.showErrors({"#email": errorMessage});
                }else if(errorType === "password") {
                    this.validator.showErrors({"#password": errorMessage});
                }

            }
        })()

    }

    @autobind
    signInWithGoogle(){

        (async () => {

            const provider = new GoogleAuthProvider();
      
            try {
            
            const { providerId, user } = await signInWithPopup(auth, provider);
            const idTokenResult = await user.getIdTokenResult();
            console.log(idTokenResult.token);
            console.log(user, providerId);

              const {
                displayName,
                email,
                photoURL: avatar,
                // stsTokenManager: { accessToken},
              }  = user;
          
          
              const authResponse = await AuthApi.checkExisingUser({ email, providerId });

              const { result } = authResponse.data;
          
              if (result === "not found") {
                const response = await AuthApi.signup({
                  providerId,
                  name: displayName,
                  email,
                  avatar,
                  password: "google.com",
                  role: "client",
                });
          
                console.log(response);
              }
          
              const response  = await AuthApi.googleLogin({ token: idTokenResult.token });
          
              const {token, userId } = response.data;

              // Login using google Login
          
              const expiryDate = new Date(Date.now() + 60 * 60 * 1000);
              localStorage.setItem("userId", userId);
              localStorage.setItem("token", token);
              localStorage.setItem("expiryDate", expiryDate.toString());
          
              const userAuth = new Auth();
              userAuth.login();
              history.pushState(null,'' , `/`);
              new Router();

            } catch (error) {
              // Handle errors
            //   const errorCode = error?.code;
            //   const errorMessage = error?.message;
            //   console.log("Error:", errorCode, errorMessage);

            console.log(error);
            }
        })()

    };
    
    automateLogout() {
        const now = new Date();
        const expiryDate = localStorage.getItem("expiryDate");
        if (now > new Date(expiryDate as string)) {
          localStorage.removeItem("expiryDate");
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
        }
    }
    
    @autobind
    navigateHandler(e: Event) {
        e.preventDefault();

        const linkEl = e.target as HTMLAnchorElement;
        const targetLink = linkEl.getAttribute("href");

        if(linkEl && targetLink === "./signup") {
            history.pushState(null, "", targetLink);
        }else if(linkEl && targetLink === "./forgot") {
            history.pushState(null, "", targetLink);
        }

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
            .addField("#password", [
                {
                    rule: "required",
                }
                , 
                {
                    rule: "minLength",
                    value: 6
                }
            ])
    }


}