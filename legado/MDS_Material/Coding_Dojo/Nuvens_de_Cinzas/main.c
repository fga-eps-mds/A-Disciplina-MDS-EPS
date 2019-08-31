#include <stdio.h>
#include <stdlib.h>


int verificaAeroportos(char matriz[1000][1000], int Linhas, int Colunas);

int main(){

    int X = 0;
    int Y = 0;
    char mapa[1000][1000];
    char mapa_inicial[1000][1000];
    int aero = 0;
    int i, j;
    int final_day =0;
    int first_day = 0;
    int aux_aero = 0;
    bool test_first_day = true;

    scanf("%d %d", &Y, &X);
    printf("\n");

    char aux;
    for(i = 0; i < Y; i++){
        for(j = 0; j < X ; j++){
            scanf("%c", &aux);

            if(aux == '\n')
                scanf("%c", &aux);

            mapa[i][j] = aux;
            mapa_inicial[i][j] = aux;
        }
    }

    printf("\n");

    aero = verificaAeroportos(mapa_inicial, Y, X);


    while(aero != 0){


        //Espalha fumaça pro novo mapa
        for(i = 0; i <= Y; i++){
            for(j = 0; j <= X; j++){
                if(mapa_inicial[i][j] == '*'){
                   if(i < Y)
                   mapa[i+1][j] = '*';
                   if(i > 0)
                   mapa[i-1][j] = '*';
                   if(j < X)
                   mapa[i][j+1] = '*';
                   if(j > 0)
                   mapa[i][j-1] = '*';
                }
            }
        }


        //Mapa velho recebe o novo
        for(i = 0; i <= Y; i++){
            for(j=0; j<=X; j++){
                mapa_inicial[i][j] = mapa[i][j];
            }
        }

        //Salva os dias corridos
        final_day++;
        aux_aero = aero;
        aero = verificaAeroportos(mapa_inicial, Y, X);

        //Salva o dia em que o primeiro aeroporto foi coberto
        if(aux_aero > aero && test_first_day){
            first_day = final_day;
            test_first_day = false;
        }

    }

    printf("%d %d\n", first_day, final_day);

    return 0;
}




int verificaAeroportos(char matriz[1000][1000], int Linhas, int Colunas){
    int qtd_aero = 0;
    int i, j;

    for(i = 0; i <= Linhas; i++){
        for(j = 0; j <= Colunas ; j++){
            if(matriz[i][j] == 'A')
                qtd_aero += 1;
        }
    }

    return qtd_aero;
}





/*



########
########
########
########
########
########
########

########
########
########
###A####
########
########
########

..#...##
.##.....
###.A..A
.#......
.#....A.
...A....
........

........
........
........
...#....
........
........
........






*/