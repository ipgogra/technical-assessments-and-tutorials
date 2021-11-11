// C# Exercise that creates a function to translate from English to Pig Latin
// Created by Isabella Patterson

using System;

class Program {

    // logic for converting to pig latin
    static String toPigLatin(String word) {

        // declare and init empty String var
        // get word in lower case
        // using char letters in a word
        // for vowels

        String pigLatin = "";
        word = word.ToLower();
        char letter = word[0];

        // if letter is a vowel
        // attach "way" to word for pig latin convert
        if (
            letter == 'a' ||
            letter == 'e' ||
            letter == 'i' ||
            letter == 'o' ||
            letter == 'u'
        ) {
            pigLatin = word + "way";
        }
        // otherwise continue and attach "ay"
        else {
            int index = 0;
            while (index < word.Length) {
                letter = word[index];
                if (
                    letter == 'a' ||
                    letter == 'e' ||
                    letter == 'i' ||
                    letter == 'o' ||
                    letter == 'u'
                ) {
                    break;
                }

                index++;
            }

            word.Substring(index, word.Length - index);
            pigLatin =
                word.Substring(index, word.Length - index) +
                word.Substring(0, index) +
                "ay";
        }

        return pigLatin;
    }

    // example String inputs
    static void main(string[] args) {
        Console.WriteLine(toPigLatin("paris"));
        Console.WriteLine(toPigLatin("amazon"));
        Console.WriteLine(toPigLatin("crumb"));
    }
}
