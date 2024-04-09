package fr.voice.TheVoice.service;

import java.util.List;

import fr.voice.TheVoice.entites.Produit;

public interface ProduitService {

	Produit saveProduit(Produit produit);

	Produit getProduitById(Long id);

	List<Produit> getAllProduits();

	void deleteProduit(Long id);
}
