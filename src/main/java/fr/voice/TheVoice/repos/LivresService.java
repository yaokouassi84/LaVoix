package fr.voice.TheVoice.repos;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import fr.voice.TheVoice.entites.Livres;

@Service
public class LivresService {

    @Autowired
    private LivresRepository livresRepository;

    @Autowired
    private ImageStorageService imageStorageService;

    public void saveLivre(Livres livre) {
        livresRepository.save(livre);
    }

    // Autres méthodes pour récupérer les livres, etc.
}
