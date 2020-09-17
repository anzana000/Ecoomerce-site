import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component.jsx";
import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          id: 1,
          imageUrl:
            "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg",
          title: "sneakers",
          linkUrl: "sneakers",
        },
        {
          id: 2,
          imageUrl:
            "https://cdn.pixabay.com/photo/2016/11/29/06/09/adult-1867720_960_720.jpg",
          title: "hats",
          linkUrl: "",
        },
        {
          id: 3,
          imageUrl:
            "https://cdn.pixabay.com/photo/2017/08/01/11/48/blue-2564660_960_720.jpg",
          title: "jackets",
          linkUrl: "",
        },
        {
          id: 4,
          imageUrl:
            "https://cdn.pixabay.com/photo/2017/11/02/14/36/model-2911363_960_720.jpg",
          title: "men",
          size: "large",
          linkUrl: "",
        },
        {
          id: 5,
          imageUrl:
            "https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80",
          title: "women",
          size: "large",
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory">
        {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem
            title={title}
            key={id}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
