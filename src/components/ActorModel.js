class ActorModel {
    constructor(fname, lname, birthday, imageUrl = "", imdbId = "") {
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;
        this.imageUrl = imageUrl;
        this.imdbId = imdbId;
    }

    sayHello(){
        return "hello Mr." + this.lname;
    }
}

export default ActorModel;