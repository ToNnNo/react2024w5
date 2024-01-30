import LikeButton from "../LikeButton";
import Youtube from "../Youtube";

export default function Video({ data }) {

    return (
        <div className="row align-items-center">
            <div className="col-2 mb-3">
                <Youtube code={data.codeVideo} />
            </div>
            <div className="col-8">
                <p className="m-0 fw-bold">{data.title}</p>
                <p className="">{data.description}</p> 
            </div>
            <div className="col-2 text-end">
                <LikeButton like={data.like} />
            </div>
        </div>
    );

}