package fr.voice.TheVoice.controleur;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.voice.TheVoice.entites.Produit;
import fr.voice.TheVoice.service.ProduitService;

@RestController
@RequestMapping("/produits")
public class ProduitController {

	@Autowired
	private ProduitService produitService;
	
	@GetMapping("/add")
	public String addProduit(Produit p) {
		p.setNom("YAO");
		p.setPrix(450);
		produitService.saveProduit(p);
		return "ok";
	}

	@PostMapping("/insert")
	public Produit createProduit(@RequestBody Produit produit) {
		return produitService.saveProduit(produit);
	}

	@GetMapping("/{id}")
	public Produit getProduitById(@PathVariable Long id) {
		return produitService.getProduitById(id);
	}

	@GetMapping
	public List<Produit> getAllProduits() {
		return produitService.getAllProduits();
	}

	@DeleteMapping("/{id}")
    public void deleteProduit(@PathVariable Long id) {
        produitService.deleteProduit(id);
    }
}