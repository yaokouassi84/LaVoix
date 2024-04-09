package fr.voice.TheVoice.controleur;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import fr.voice.TheVoice.entites.Livres;
import fr.voice.TheVoice.repos.LivresService;

@RestController
@RequestMapping("/livres")
public class LivresController {

    @Autowired
    private LivresService livresService;

    @PostMapping("/ajouter")
    public ResponseEntity<String> ajouterLivre(@RequestBody Livres livre) {
        // Traiter les données et enregistrer le livre dans la base de données
        livresService.saveLivre(livre);
        return ResponseEntity.ok("Livre ajouté avec succès");
    }

    // Autres méthodes pour récupérer les livres, etc.
}
