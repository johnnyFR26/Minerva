import { inject } from '@angular/core';
import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { User } from '@services/user';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
    const userService = inject(User)
    const user = userService.getUserInfo()
    const token = user()?.token
    if (token) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    return next(req);
}