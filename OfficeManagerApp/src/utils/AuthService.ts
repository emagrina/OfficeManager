import { Log, User, UserManager } from 'oidc-client';

export class AuthService {
    userManager: any;

    constructor() {
        const settings = {
            authority: '',
            client_id: '',
            redirect_uri: '',
            response_type: '',
            scope: '',
            post_logout_redirect_uri: '',

            silent_redirect_uri: '',
        };

        this.userManager = new UserManager(settings);

        Log.logger = console;
        Log.level = Log.INFO;
    }

    getUser() {
        return this.userManager.getUser();
    }

    login() {
        return this.userManager.signinRedirect();
    }

    logout() {
        return this.userManager.signoutRedirect();
    }

    renewToken() {
        return this.userManager.signinSilent();
    }

    ensureAuthorized() {
        return this.getUser().then((user: any) => {
            return new Promise((resolve, reject) => {
                if (user && user.access_token) {
                    resolve(user);

                } else if (user) {
                    this.renewToken().then((renewedUser: any) => {
                        resolve(renewedUser);
                    });
                } else {
                    reject();
                    this.login();
                }
            })
        })
    }

    signinRedirectCallback() {
        return this.userManager.signinRedirectCallback();
    }

    signinSilentCallback() {
        return this.userManager.signinSilentCallback();
    }
}

