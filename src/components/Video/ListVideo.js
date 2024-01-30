import Video from "./Video";

export default function ListVideo({ videos }) {
    
    let text;
    if(videos.length === 0){
        text = "Aucune vidéo"
    }else if(videos.length === 1) {
        text = "1 vidéo";
    } else {
        text = `${videos.length} vidéos`;
    }    
    
    return (
        <div className="border rounded-3 p-3 bg-white">
            <p className="h5 mb-4">{text}</p>

            {videos.map( video => <Video key={video.id} data={video} />)}
        </div>
    );
}