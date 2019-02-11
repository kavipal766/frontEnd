import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};



@Injectable({
  providedIn: 'root'
})
export class ApiIntegrationService {


  constructor(private http: HttpClient) { }

  public baseURL = 'http://localhost:3000/'
  sendOTP(data){
    console.log("detail",data);
  	return this.http.post(this.baseURL+'users/sendOtp',data)
  }
  getData(data){
    return this.http.post(this.baseURL+'users/sent',data);
  }

  signupentityheader(data){
    return this.http.post(this.baseURL+'/api/v1.0/apEntity/createEntityProfile/',data);
  }
}
