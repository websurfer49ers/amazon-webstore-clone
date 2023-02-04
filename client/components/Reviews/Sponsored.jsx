import React, { useEffect, useState } from "react";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";



export function Sponsored() {
    const [sponsoredItem, setSponsoredItem] = useState([])
    const [imageUrl, setImageUrl] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3006/api/product/1", {
            mode: "cors",
        })
        .then((res) => res.json())
        .then((sponsored) => {
            setSponsoredItem(sponsored[0])
        });
    }, []);

    useEffect(() => {
        fetch("http://localhost:3006/api/pictures/1", {
          mode: "cors",
        })
          .then((res) => res.json())
          .then((fetched) => {
            setImageUrl(fetched[0].pictureurl);
          });
      }, []);
    

      return (
            <span>
                <div className="sponsoredItemDiv">
                    <h2 className="sponsored">Popular products based on this item</h2>
                </div>
                <div className="image">
                   <img
                    src={imageUrl}
                    style={{
                        maxHeight: "160px",
                        maxWidth: "160px",
                        verticalAlign: top,
                        border: 0,

                    }}>
                    </img>
            </div>
            </span>
      );
    

}


