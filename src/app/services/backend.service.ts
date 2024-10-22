import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { youtubeEnvironment } from "src/environments/environment.prod";

@Injectable({
    providedIn : 'root'
})
export class BackendService {
    constructor(private http: HttpClient) {}

    private apiUrl = environment.apiUrl
    private ytApiUrl = youtubeEnvironment.youtubeApiUrl
    private ytVideoUrl = youtubeEnvironment.videoApiUrl

    getPosts() {
        return this.http.get(`${this.apiUrl}/media`);
    }

    getVideos(): Observable<any> {
        return this.http.get(this.ytVideoUrl);
    }

    getSubscribers(): Observable<any> {
        return this.http.get(this.ytApiUrl);
    }

    getShowReel() {
        return this.http.get(`${this.apiUrl}/show-reel`);
    }

    getRecentWorks() {
        return this.http.get(`${this.apiUrl}/recent-works`);
    }

    getRecentCompanies() {
        return this.http.get(`${this.apiUrl}/recent-companies`);
    }

    getChannelInfo() {
        return this.http.get(`${this.apiUrl}/channel-info`);
    }

    contactUs(data: object) {
        return this.http.post(`${this.apiUrl}/contact-us`, data);
    }

    contactMe(data: object) {
        return this.http.post(`${this.apiUrl}/contact-me`, data);
    }
}