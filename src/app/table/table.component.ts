import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements OnInit {

  //On ajoute un bang ! à chaque propriété pour les initialiser
  filteredSchools: any[] = [];
  pageOne!: number;
  pageTwo!: number;
  pageThree!: number; 
  currentPage!: number;
  nextPages!: number;
  itemsPerPages!: number;
  searchTerms!: string;

  //On initialise les propriétés
  ngOnInit(): void {
    this.filteredSchools = this.schools;
    this.currentPage = 1;
    this.itemsPerPages = 10;
    this.searchTerms = '';
  }

  schools: any[] = [
    { id: 1, nom: 'Test1', ville: 'Ville1', type: 'Type1', comite: 'Comite1', partenaire: 'Oui', adherents: 100 },
    { id: 2, nom: 'Test2', ville: 'Ville2', type: 'Type2', comite: 'Comite2', partenaire: 'Non', adherents: 200 },
    { id: 3, nom: 'Test3', ville: 'Ville3', type: 'Type3', comite: 'Comite3', partenaire: 'Oui', adherents: 300 },
    { id: 4, nom: 'Test4', ville: 'Ville4', type: 'Type4', comite: 'Comite4', partenaire: 'Oui', adherents: 300 },
    { id: 5, nom: 'Test5', ville: 'Ville5', type: 'Type5', comite: 'Comite5', partenaire: 'Oui', adherents: 300 },
    { id: 6, nom: 'Test6', ville: 'Ville6', type: 'Type6', comite: 'Comite6', partenaire: 'Oui', adherents: 300 },
    { id: 7, nom: 'Test7', ville: 'Ville7', type: 'Type7', comite: 'Comite7', partenaire: 'Oui', adherents: 300 },
    { id: 8, nom: 'Test8', ville: 'Ville8', type: 'Type8', comite: 'Comite8', partenaire: 'Oui', adherents: 300 },
    { id: 9, nom: 'Test9', ville: 'Ville9', type: 'Type9', comite: 'Comite9', partenaire: 'Oui', adherents: 300 },
    { id: 10, nom: 'Test10', ville: 'Ville10', type: 'Type10', comite: 'Comite10', partenaire: 'Oui', adherents: 300 },
    { id: 11, nom: 'Test11', ville: 'Ville11', type: 'Type11', comite: 'Comite11', partenaire: 'Oui', adherents: 300 },
    { id: 12, nom: 'Test12', ville: 'Ville12', type: 'Type12', comite: 'Comite12', partenaire: 'Oui', adherents: 300 },
    { id: 13, nom: 'Test13', ville: 'Ville13', type: 'Type13', comite: 'Comite13', partenaire: 'Oui', adherents: 300 },
    { id: 14, nom: 'Test14', ville: 'Ville14', type: 'Type14', comite: 'Comite14', partenaire: 'Oui', adherents: 300 },
  ];

  get visibleSchools(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPages;
    const endIndex = startIndex + this.itemsPerPages;
    return this.filteredSchools.slice(startIndex, endIndex);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }


  firstPage() {
    this.currentPage = 1;
  }

  secondPage() {
    this.currentPage = 2;
  }

  thirthPage() {
    this.currentPage = 3;

  }

  nextPage() {
    const pageCount = Math.ceil(this.filteredSchools.length / this.itemsPerPages);
    if (this.currentPage < pageCount) {
      this.currentPage++;
    }
  }

  search(event: Event) {
    event.preventDefault();
    console.log(this.searchTerms);
    // Diviser le terme de recherche en plusieurs mots
    const terms = this.searchTerms.toLowerCase().split(' ');
    //console.log(terms);
    // Filtrer les données en fonction du terme de recherche
    this.filteredSchools = this.schools.filter(school =>
      // Vérifier si chaque mot de recherche est inclus dans les données de l'école
      terms.every(term =>
        school.nom.toLowerCase().includes(term) ||
        school.ville.toLowerCase().includes(term)
      )
    );
  }
}
