package fr.voice.TheVoice.service;

import java.util.List;

import javax.ejb.Stateless;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.voice.TheVoice.entites.Produit;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Service
@Stateless
@Transactional
public class ProduitServiceImpl implements ProduitService {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Produit saveProduit(Produit produit) {
		entityManager.persist(produit);
		return produit;
	}

	@Override
	public Produit getProduitById(Long id) {
		return entityManager.find(Produit.class, id);
	}

	@Override
	public List<Produit> getAllProduits() {
		return entityManager.createQuery("SELECT p FROM Produit p", Produit.class).getResultList();
	}

	@Override
	public void deleteProduit(Long id) {
		Produit produit = entityManager.find(Produit.class, id);
		if (produit != null) {
			entityManager.remove(produit);
		}
	}
}
