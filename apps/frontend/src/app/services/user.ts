import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { storageUser } from '../types/storageUser';
import { Observable } from 'rxjs';
import { CreateUser } from '../types/createUser';

@Injectable({
  providedIn: 'root'
})
export class User {
  private http = inject(HttpClient)
  private router = inject(Router)
  private urlApi = environment.urlApi
  private userInfo = signal<storageUser | null>(this.loadUserFromLocalStorage())

  constructor(){
    effect(() => {
      this.syncUserInfoWithLocalStorage()
    })
  }

  loginUser(user: {email: string, password: string}): Observable<any> {
    return this.http.post(`${this.urlApi}/login`, user)
  }

     syncUserInfoWithLocalStorage() {
        if (this.userInfo()) {
            localStorage.setItem('UserData', JSON.stringify(this.userInfo()))
        } else {
            localStorage.removeItem('UserData')
        }
    }

    setCurrentUser(user: storageUser | null) {
        this.userInfo.set(user)
    }

    getUserInfo() {
        return this.userInfo.asReadonly()
    }

    isUserLogged() {
        return !!this.userInfo()
    }

    private loadUserFromLocalStorage(): storageUser | null {
        const storedUser = localStorage.getItem('UserData')
        return storedUser ? JSON.parse(storedUser) : null
    }

   createUserObserVable(user: CreateUser){
        return this.http.post(`${this.urlApi}/users`, user).subscribe({
            next: (response: any) => {
                console.log('Response:', response)

                if(!response){
                    return console.log("DEU MERDA", response)
                }else{
                    this.router.navigateByUrl('/login')
                    console.log("DEU CERTO")
                }
            },
            error: (error: any) => {
                console.log('Error:', error)
            }
        })
    } 

}
