#include <stdio.h> 
int main() 
{ 
    int a, b, c, f, l; 
    char r, g, s, p; 
    printf("the journey starts here \n"); 
 
    printf("\tWELCOME HOME \t\n"); 
 
    printf("give your age\n"); 
    scanf("%d", &a); 
 
    if (a > 15) 
    { 
        printf("'we will get back to you shortly, please wait till then'\n "); 
 
        printf("tik tik tik\n"); 
 
        printf("sir/mam please dial the first three digits of your phone number\n "); 
        scanf("%d", &b); 
        if (b == 974) 
        { 
            printf("are you pallab the hero?\n"); 
        } 
        else if (b == 800) 
        { 
            printf("so you are aura siri the motku bhai\n"); 
            printf("soo whom will you save if pallab and soumi are drowing in a well?\n"); 
            printf("CHOOSE p FOR PALLAB AND s FOR SOUMI:\n"); 
            scanf("%s", &p); 
            if (p == 's') 
            { 
                printf("soumi ke bachaili toh? ja bhablam bon hois rakhi er jonno kichu poisa dibo bujhlam\n"); 
            } 
            if (p == 'p') 
            { 
                printf("as you choose to save the hero, hero will grab soumi kala's hand and save her too yayyy\n"); 
                printf("type y for yes and n for no\n"); 
                scanf("%s", &g); 
                if (g == 'y') 
                { 
                    printf("as you selected to go forward\n"); 
                    printf("are you ready to go forward in this journey?\n"); 
 
                    printf("happy rakshabandhan muy boin aurasiri\n"); 
                    printf("choose from options 1,2,3,4,5 and find your fortune\n"); 
                    printf("rememberr 1 of the options got a very fine gift from pallab to you and rest options are about you giving pallab gifts\n"); 
                    scanf("%d", &l); 
                    switch (l) 
                    { 
                    case 1: 
                        printf("you just got 100 rupees gift from pallab\n"); 
                        break; 
                    case 2: 
                        printf("you have to feed pallab a fine cake \n"); 
                        break; 
                    case 3: 
                        printf("you have to give pallab a coffe 99 treat \n"); 
                        break; 
                    case 4: 
                        printf("you have to gift pallab a mio amore treat\n"); 
                        break; 
                    case 5: 
                        printf("you have to feed pallab from appayan momo\n"); 
                        break; 
                    } 
                } 
            } 
        } 
        else if (b == 869) 
        { 
            printf("are you mota soumi the motu?\n"); 
            printf("enter first 3 digits of either meghdoot's phone number or your brother's\n "); 
            scanf("%d", &c); 
 
            switch (c) 
            { 
            case 923: 
                printf("yes now i'm sure it is soumi the meghdoot lober\n"); 
                break; 
            case 993: 
                printf("why are you doingg this? why not meghdoot's number?\n"); 
                break; 
            } 
 
            { 
                printf("if  there are two people drowning in a  well who will you save?\n"); 
                printf("aurosree or meghdoot?\n"); 
                printf("choose A for aurosree and M for meghdoot\n"); 
                printf("hint =(there is also a way out there to save both of them depends on your choice)\n"); 
                printf("now choose carefully\n"); 
                scanf("%s", &r); 
                if (r == 'A') 
                { 
                    printf("meghdoot is no more\n"); 
                    printf("you are the meghdoot killer\n"); 
                } 
                else if (r == 'M') 
                { 
                    printf("aurosree may still live as the power of lob is still alive\n"); 
                    printf(" NOW as you  saved both of them \n"); 
                    { 
                        printf("happy rakhi motka\n "); 
                        printf("choose one option from below\n"); 
                    start: 
                        printf("1,2,3,4 - choose one of  them\n"); 
                        scanf("%s", &s); 
                        switch (s) 
                        { 
                        case '1': 
                            printf("so you have to gift me 25 rupees\n"); 
                            break; 
                        case '2': 
                            printf("so you are getting 50 rupees gift\n"); 
                            break; 
                        case '3': 
                            printf("you have to give me 11 rupees\n"); 
                            break; 
                        case '4': 
                            printf("you have to gift me 20 rupees\n"); 
                            break; 
                        } 
                    } 
                } 
                else 
                { 
                    printf("both died because soumi is idiot\n"); 
                } 
            } 
        } 
        else if (b == 731) 
        { 
            printf("somumi's bhabi is it?"); 
            if ("what are the first 3 digits of biswadeep's phone number?\n") 
                ; 
            scanf("%d", &f); 
        } 
 
        else 
        { 
            printf("please give a valid number"); 
        } 
    } 
 
    else 
    { 
        printf("sir please try to do better"); 
    } 
    return 0; 
} 
 
