import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ProductsComponent } from './home/products/products.component';
import { CareersComponent } from './home/careers/careers.component';
import { ContactComponent } from './home/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { LoanComponent } from './home/calculator/loan/loan.component';
import { FooterComponent } from './home/nav/footer/footer.component';
import { HeaderComponent } from './home/nav/header/header.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WhychooseusComponent } from './home/whychooseus/whychooseus.component';
import { ManagementComponent } from './home/management/management.component';
import { CorporategovernanceComponent } from './home/corporategovernance/corporategovernance.component';
import { InnovationsComponent } from './home/innovations/innovations.component';
import { MediaComponent } from './home/media/media.component';
import { FixedDepositeComponent } from './home/sub-products/fixed-deposite/fixed-deposite.component';
import { FixedPeriodSharesComponent } from './home/sub-products/fixed-period-shares/fixed-period-shares.component';
import { LikusasaFixedDepositAccountComponent } from './home/sub-products/likusasa-fixed-deposit-account/likusasa-fixed-deposit-account.component';
import { PermanentSharesComponent } from './home/sub-products/permanent-shares/permanent-shares.component';
import { CallAccountsComponent } from './home/sub-products/call-accounts/call-accounts.component';
import { SubscriptionSharesComponent } from './home/sub-products/subscription-shares/subscription-shares.component'
import { MoreaboutComponent } from './home/about/more/moreabout/moreabout.component';
import { CompaintsPolicyComponent } from './home/compaints-policy/compaints-policy.component';
import { InvestmentsComponent } from './home/investmentloans/investments/investments.component';
import { LoansComponent } from './home/investmentloans/loans/loans.component';
import { SavingsaccountComponent } from './home/investmentloans/savingsaccount/savingsaccount.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MortgageComponent } from './home/mortgage/mortgage.component';
import { StatsComponent } from './home/stats/stats.component';
import { DataTablesModule } from 'angular-datatables';
import { DatePipe } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import {NgxPrintModule} from 'ngx-print';
import { PolicyComponent } from './policy/policy.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { TempCodesComponent } from './temp-codes/temp-codes.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    CareersComponent,
    ContactComponent,
    LoanComponent,
    FooterComponent,
    HeaderComponent,
    WhychooseusComponent,
    ManagementComponent,
    CorporategovernanceComponent,
    InnovationsComponent,
    MediaComponent,
    FixedDepositeComponent,
    FixedPeriodSharesComponent,
    LikusasaFixedDepositAccountComponent,
    PermanentSharesComponent,
    CallAccountsComponent,
    SubscriptionSharesComponent,
    MoreaboutComponent,
    CompaintsPolicyComponent,
    InvestmentsComponent,
    LoansComponent,
    SavingsaccountComponent,
    MortgageComponent,
    StatsComponent,
    PolicyComponent,
    MobileappComponent,
    TempCodesComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ChartsModule,
    NgxPrintModule
  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
