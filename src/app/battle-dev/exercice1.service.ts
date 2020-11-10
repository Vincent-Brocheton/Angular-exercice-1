import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Exercice1Service {
  private inputs: string[];
  playerA: number;
  playerB: number;
  winner: string;
  cardA: number[];
  cardB: number[];

  constructor() {
    this.cardA = [];
    this.cardB = [];
  }

  getResult(inputs): string {
    this.play(inputs);

    if (this.playerA > this.playerB){
      return 'A';
    } else {
      return 'B';
    }
  }

  play(inputs: string[]): void{
    const turn: number = parseInt(inputs[0], 10);
    let cards: string[];
    for ( let i = 1 ; i <= turn ; i++){

        cards = inputs[i].split(' ');

        this.cardA[i - 1] = parseInt(cards[0], 10);
        this.cardB[i - 1] = parseInt(cards[1], 10);

        if (this.cardA > this.cardB){
          this.playerA++;
        } else if (this.cardB > this.cardA) {
          this.playerB++;
        }
    }
  }


  private removeFirstInput(inputs: string[]): string[] {
    const array = [...inputs];
    array.shift();
    return array;
  }

  private createSubArray(inputValues: string[]): string[][] {
    return inputValues.map(turn => turn.split(' '));
  }

  private formatTurnScores(turnScores: string[]): number[] {
    return turnScores.map(score => parseInt(score, 10));
  }

  formatInputs(inputs: string[]): number[][] {
    const turns = this.removeFirstInput(inputs);
    return this.createSubArray(turns).map(turn => this.formatTurnScores(turn));
  }
}
