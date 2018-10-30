import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdmissionClass } from './Admission/admission';
import { CommitteeClass } from './Committee/committee';
import { ContactClass } from './Contact/contact';
import { CounsilClass } from './Council/counsil';
import { DepartmentClass } from './Department/department';
import { DisclosureClass } from './Disclosure/disclosure';
import { DownloadClass } from './Download/download';
import { FacilitiesClass } from './Facilities/facilities';
import { FacultyClass } from './Faculty/faculty';
import { GalleryClass } from './Gallery/gallery';
import { HomeClass } from './Home/home';
import { ResearchClass } from './Research/research';
import { SarNaccClass } from './SarNacc/sarnacc';
import { ResultClass } from './Result/result';
import { TandPClass } from './TandP/tandp';
import { AboutClass } from './About/about';

const appRoute: Routes = [
  { path: 'home', component: HomeClass },
  { path: 'about', component: AboutClass },
  { path: 'result', component: ResultClass },
  { path: 'admission', component: AdmissionClass },
  { path: 'committee', component: CommitteeClass },
  { path: 'contact', component: ContactClass },
  { path: 'facilities', component: FacilitiesClass },
  { path: 'faculty', component: FacultyClass },
  { path: 'department', component: DepartmentClass },
  { path: 'gallery', component: GalleryClass },
  { path: 'council', component: CounsilClass },
  { path: 'tandp', component: TandPClass },
  { path: 'research', component: ResearchClass },
  { path: 'disclosure', component: DisclosureClass },
  { path: 'download', component: DownloadClass },
  { path: 'sarnacc', component: SarNaccClass }
]



@NgModule({
  declarations: [
    AppComponent,
    AboutClass,
    AdmissionClass,
    CommitteeClass,
    ContactClass,
    CounsilClass,
    DepartmentClass,
    DisclosureClass,
    DownloadClass,
    FacilitiesClass,
    FacultyClass,
    GalleryClass,
    HomeClass,
    ResearchClass,
    SarNaccClass,
    ResultClass,
    TandPClass
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
