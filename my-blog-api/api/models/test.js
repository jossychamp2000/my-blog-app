
const PATH = "./data.json";
const fs = require('fs');

class Posts {

    get() {

        return this.readData();
    }

    postData(newPost) {
        const currentPost = this.readData()
        currentPost.unshift(newPost);
        this.addData(currentPost);
    }



    readData() {
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

    addData(rawData) {
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data)
    }


}