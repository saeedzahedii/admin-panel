import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AuthGuard } from '../authentication/guards/auth.guard';

export const routes = [
    { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] }
]

@NgModule({
    imports: [
        // CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,

    ],
    declarations: [
        HomeComponent,
        UserInfoComponent
    ],
    providers: [
        AuthGuard
    ]
})
export class HomeModule { }