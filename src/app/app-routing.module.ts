import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
