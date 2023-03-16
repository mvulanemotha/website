import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home/home.component';
import { CareersComponent } from './home/careers/careers.component';
import { ContactComponent } from './home/contact/contact.component';
import { ProductsComponent } from './home/products/products.component';
import { CorporategovernanceComponent } from './home/corporategovernance/corporategovernance.component';
import { InnovationsComponent } from './home/innovations/innovations.component';
import { ManagementComponent } from './home/management/management.component';
import { MediaComponent } from './home/media/media.component';
import { LoanComponent } from './home/calculator/loan/loan.component';
import { WhychooseusComponent } from './home/whychooseus/whychooseus.component';
import { CallAccountsComponent } from './home/sub-products/call-accounts/call-accounts.component';
import { FixedDepositeComponent } from './home/sub-products/fixed-deposite/fixed-deposite.component';
import { FixedPeriodSharesComponent } from './home/sub-products/fixed-period-shares/fixed-period-shares.component';
import { LikusasaFixedDepositAccountComponent } from './home/sub-products/likusasa-fixed-deposit-account/likusasa-fixed-deposit-account.component';
import { PermanentSharesComponent } from './home/sub-products/permanent-shares/permanent-shares.component';
import { SubscriptionSharesComponent } from './home/sub-products/subscription-shares/subscription-shares.component';
import { MoreaboutComponent } from './home/about/more/moreabout/moreabout.component';
import { CompaintsPolicyComponent } from './home/compaints-policy/compaints-policy.component';
import { InvestmentsComponent } from './home/investmentloans/investments/investments.component';
import { LoansComponent } from './home/investmentloans/loans/loans.component';
import { SavingsaccountComponent } from './home/investmentloans/savingsaccount/savingsaccount.component';
import { MortgageComponent } from './home/mortgage/mortgage.component';
import { StatsComponent } from './home/stats/stats.component';
import { PolicyComponent } from './policy/policy.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { TempCodesComponent } from './temp-codes/temp-codes.component';
import { SupportComponent } from './support/support.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'corporategovernance', component: CorporategovernanceComponent },
  { path: 'innovations', component: InnovationsComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'media', component: MediaComponent },
  { path: 'calculator', component: LoanComponent },
  { path: 'whychooseus', component: WhychooseusComponent },
  { path: 'call-accounts', component: CallAccountsComponent },
  { path: 'fixed-deposite', component: FixedDepositeComponent },
  { path: 'fixed-period-shares', component: FixedPeriodSharesComponent },
  { path: 'likusasa-fixed-deposit-account', component: LikusasaFixedDepositAccountComponent },
  { path: 'permanent-shares', component: PermanentSharesComponent },
  { path: 'subscription-shares', component: SubscriptionSharesComponent },
  { path: 'moreabout', component: MoreaboutComponent },
  { path: 'complaints-policy', component: CompaintsPolicyComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'investments', component: InvestmentsComponent },
  { path: 'savingsaccount', component: SavingsaccountComponent },
  { path: 'mortgage', component: MortgageComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'mobileapp', component: MobileappComponent },
  { path: 'tempcodes', component: TempCodesComponent },
  { path: 'support', component: SupportComponent }

];

@NgModule({

  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
