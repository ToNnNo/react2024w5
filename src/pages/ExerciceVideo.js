import ListVideo from "../components/Video/ListVideo";

export default function ExerciceVideo() {
    const videos = [
        { 
            id: 1, codeVideo: "5HgS6G0xhLY", title: "Moi, Moche et Méchant 4", 
            description: "Description de la bande annonce de Moi, Moche et Méchant 4", like: false 
        },
        { 
            id: 2, codeVideo: "mEgrD_CG25c", title: "SOS FANTOMES : La Menace de Glace", 
            description: "Description de la bande annonce de SOS FANTOMES : La Menace de Glace", like: true 
        },
        { 
            id: 3, codeVideo: "OLcnN3SsDno", title: "FALLOUT", 
            description: "Description de la bande annonce de FALLOUT", like: true 
        },
    ];
    
    return (
        <>
            <h1>Exercice Vidéo</h1>

            <ListVideo videos={videos} />
        </>
    );
}