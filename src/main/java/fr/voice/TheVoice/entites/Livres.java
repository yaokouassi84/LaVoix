package fr.voice.TheVoice.entites;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Livres {

	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	 	private String libelle;
	 	private int nbPages;
	 	private String image1;
	 	private String image2;
	 	
		public Livres() {
			super();
			
		}

		public Livres(Long id, String libelle, int nbPages, String image1, String image2) {
			super();
			this.id = id;
			this.libelle = libelle;
			this.nbPages = nbPages;
			this.image1 = image1;
			this.image2 = image2;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getLibelle() {
			return libelle;
		}

		public void setLibelle(String libelle) {
			this.libelle = libelle;
		}

		public int getNbPages() {
			return nbPages;
		}

		public void setNbPages(int nbPages) {
			this.nbPages = nbPages;
		}

		public String getImage1() {
			return image1;
		}

		public void setImage1(String image1) {
			this.image1 = image1;
		}

		public String getImage2() {
			return image2;
		}

		public void setImage2(String image2) {
			this.image2 = image2;
		}

		@Override
		public String toString() {
			return "Livres [id=" + id + ", libelle=" + libelle + ", nbPages=" + nbPages + ", image1=" + image1
					+ ", image2=" + image2 + "]";
		}
	 		 	
}
