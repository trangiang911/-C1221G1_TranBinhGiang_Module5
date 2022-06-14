import { Injectable } from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Word [] = [{
    word: 'hello',
    mean: 'xin chào'
  }, {
    word: 'morning',
    mean: 'chào buổi sáng'
  }, {
    word: 'go',
    mean: 'đi'
  }, {
    word: 'back',
    mean: 'quay về'
  }, {
    word: 'animal',
    mean: 'long c12'
  }];
  constructor() { }
  getAll() {
    return this.words;
  }

  findById(word: string) {
    for (let i = 0; i < this.words.length ; i++) {
      if (word === this.words[i].word){
        return this.words[i];
      }
    }
  }
}
