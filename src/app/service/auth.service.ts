import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://degotaemgota.herokuapp.com/usuarios/logar',userLogin)
  } 

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://degotaemgota.herokuapp.com/usuarios/cadastrar',user)
  }

  getByIdUser(id: number): Observable<User>{
    var token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    return this.http.get<User>(`https://degotaemgota.herokuapp.com/usuarios/${id}`, token)
    
  }

  atualizarUser(user: User): Observable<User> {
    var token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    return this.http.put<User>('https://degotaemgota.herokuapp.com/usuarios/atualizar', user, token)
  }


  logado(){
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }

    return ok 
  }


}
