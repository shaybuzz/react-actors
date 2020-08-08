class ActorModel {




    constructor(fname, lname, birthday, imageUrl = "", imdbId = "") {
        this.fname = fname;
        this.lname = lname;
        this.imageUrl = imageUrl;
        this.imdbId = imdbId;
        this.birthDay = new Date(birthday);
    }

    isNamePrefix(prefix){
        prefix = prefix.toLowerCase();
        return this.getFullName().toLowerCase().startsWith(prefix) || 
        this.lname.toLowerCase().startsWith(prefix);
    }

    getFullName() {
        return this.fname + " " + this.lname;
    }

    getAge() {
        let now = new Date(Date.now());
        let yearDiff = now.getFullYear() - this.birthDay.getFullYear();
        yearDiff = this.hasCelebratedBirthdayThisYear() ? yearDiff : yearDiff - 1;
        return yearDiff;
    }

    toString(){
        return this.getFullName() + " imdb " + this.imdbId;
    }

    isBirthday() {
        let now = new Date(Date.now());
        return now.getDate() == this.birthDay.getDate() && now.getMonth() == this.birthDay.getMonth();
    }

    hasCelebratedBirthdayThisYear() {
        let now = new Date(Date.now());
        if (now.getMonth() > this.birthDay.getMonth()) return true;
        if (now.getMonth() == this.birthDay.getMonth()) return now.getDate() >= this.birthDay.getDate();
        return false;
    }
}

export default ActorModel;