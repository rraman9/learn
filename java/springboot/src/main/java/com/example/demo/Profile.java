package com.example.demo;

/**
 * Created by rraman on 1/19/2018.
 */
public class Profile {
    String name;
    String age;
    String hobby;

    public String getName() {
        return name;
    }

    public Profile(String name, String age, String hobby) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }
}
