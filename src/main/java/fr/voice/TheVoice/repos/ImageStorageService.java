package fr.voice.TheVoice.repos;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageStorageService {

    private static final String IMAGE_UPLOAD_DIR = "webapp/imagesLives/";

    public String storeImage(MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        File convertFile = new File(IMAGE_UPLOAD_DIR + fileName);
        convertFile.createNewFile();
        try (FileOutputStream fout = new FileOutputStream(convertFile)) {
            fout.write(file.getBytes());
        }
        return fileName;
    }

    // Autres méthodes pour manipuler les images si nécessaire
}
