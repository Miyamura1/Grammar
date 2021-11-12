import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'verb',
    loadChildren: () => import('./verb/verb.module').then( m => m.VerbPageModule)
  },
  {
    path: 'pronouns',
    loadChildren: () => import('./pronouns/pronouns.module').then( m => m.PronounsPageModule)
  },
  {
    path: 'tense',
    loadChildren: () => import('./tense/tense.module').then( m => m.TensePageModule)
  },
  {
    path: 'adjective',
    loadChildren: () => import('./adjective/adjective.module').then( m => m.AdjectivePageModule)
  },
  {
    path: 'preposition',
    loadChildren: () => import('./preposition/preposition.module').then( m => m.PrepositionPageModule)
  },
  {
    path: 'listverb',
    loadChildren: () => import('./listverb/listverb.module').then( m => m.ListverbPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'listexercise',
    loadChildren: () => import('./listexercise/listexercise.module').then( m => m.ListexercisePageModule)
  },
  {
    path: 'essay1',
    loadChildren: () => import('./essay1/essay1.module').then( m => m.Essay1PageModule)
  },
  {
    path: 'image',
    loadChildren: () => import('./image/image.module').then( m => m.ImagePageModule)
  },
  {
    path: 'verbtense',
    loadChildren: () => import('./verbtense/verbtense.module').then( m => m.VerbtensePageModule)
  },
  {
    path: 'preposition1',
    loadChildren: () => import('./preposition1/preposition1.module').then( m => m.Preposition1PageModule)
  },
  {
    path: 'preposition2',
    loadChildren: () => import('./preposition2/preposition2.module').then( m => m.Preposition2PageModule)
  },
  {
    path: 'kuiz',
    loadChildren: () => import('./kuiz/kuiz.module').then( m => m.KuizPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'question1',
    loadChildren: () => import('./question1/question1.module').then( m => m.Question1PageModule)
  },
  {
    path: 'verb1',
    loadChildren: () => import('./verb1/verb1.module').then( m => m.Verb1PageModule)
  },
  {
    path: 'verb2',
    loadChildren: () => import('./verb2/verb2.module').then( m => m.Verb2PageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'adjective1',
    loadChildren: () => import('./adjective1/adjective1.module').then( m => m.Adjective1PageModule)
  },
  {
    path: 'adjective2',
    loadChildren: () => import('./adjective2/adjective2.module').then( m => m.Adjective2PageModule)
  },
  {
    path: 'pronouns1',
    loadChildren: () => import('./pronouns1/pronouns1.module').then( m => m.Pronouns1PageModule)
  },
  {
    path: 'pronouns2',
    loadChildren: () => import('./pronouns2/pronouns2.module').then( m => m.Pronouns2PageModule)
  },
  {
    path: 'verbtense2',
    loadChildren: () => import('./verbtense2/verbtense2.module').then( m => m.Verbtense2PageModule)
  },
  {
    path: 'verbtense1',
    loadChildren: () => import('./verbtense1/verbtense1.module').then( m => m.Verbtense1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
