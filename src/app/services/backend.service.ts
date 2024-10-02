import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn : 'root'
})
export class BackendService {
    constructor(private http: HttpClient) {}

    private apiUrl = environment.apiUrl

    getPosts() {
        return this.http.get(`${this.apiUrl}/posts`);
    }

    getVideos() {
        return this.http.get(`${this.apiUrl}/videos`);
    }

    getSubscribers() {
        return this.http.get(`${this.apiUrl}/subscribers`);
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