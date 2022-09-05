import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

   public getUser()
   {
   return this.http.get("http://localhost:9000/student");
   }

   
   public getTeacher()
   {
   return this.http.get("http://localhost:9000/teacher");
   }

     public getUserById(id:any){
       return this.http.get("http://localhost:9000/student/"+id);
     }

    /*public doRegistration(Student){
          return this.http.post("http://localhost:9000/register",Student,{responseType:'text' as 'json'});

      }*/



}

