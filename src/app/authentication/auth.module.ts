import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardLogin } from './guards/auth.guard-login';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes = [
    { path: '', component: LoginComponent, pathMatch: 'full', canActivate: [AuthGuardLogin] }
]

@NgModule({
    imports: [
        // CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,

    ],
    declarations: [
        LoginComponent,
    ],
    providers: [
        AuthGuardLogin
    ]
})
export class AuthenticationModule { }