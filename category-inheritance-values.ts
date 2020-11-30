
let kategoriler:Kategori[] = [
    { name:'A   ',  kdv:0, altKategoriler:[
        {name:'AB  ', kdv:0,
            altKategoriler:[
                { name:'ABC ', kdv:0},
                { name:'ABD ', kdv:0,
                altKategoriler:[
                    { name:'ABDE', kdv:0 },
                    { name:'ABDF', kdv:0 }
                ] }
            ]
        }, {name:'AG  ', kdv:5, 
            altKategoriler:[
                { name:'AGH ', kdv:0, },
                { name:'AGI ', kdv:0,
                altKategoriler:[
                    { name:'AGIJ', kdv:0,  },
                    { name:'AGIK', kdv:0, }
                ] }
            ]
        }
    ]  },
    { name:'B   ',  kdv:0, altKategoriler:[
        {name:'BB  ', kdv:0,
            altKategoriler:[
                { name:'BBC ', kdv:0},
                { name:'BBD ', kdv:0,
                altKategoriler:[
                    { name:'BBDE', kdv:0 },
                    { name:'BBDF', kdv:0 }
                ] }
            ]
        }, {name:'BG  ', kdv:0, 
            altKategoriler:[
                { name:'BGH ', kdv:0, },
                { name:'BGI ', kdv:0,
                altKategoriler:[
                    { name:'BGIJ', kdv:0,  },
                    { name:'BGIK', kdv:0, }
                ] }
            ]
        }
    ]  }
]

var root:Kategori[] =[
    {
        kdv:15,
        altKategoriler:kategoriler,
        name:'ROOT'
    }
]

render(root,0)


function render(kategoris:Kategori[],hint?:number){
    for (let i =0; i< kategoris.length;i++){
        let kategori = kategoris[i];
        kategori.kdvHint = hint;
        // Log
           if(kategori.kdv && kategori.kdv > 0 && kategori.kdvHint && kategori.kdvHint >0 ){
                kategori.kdvHint = 0;
            }
        
        console.log(kategori.name, kategori.kdv, kategori.kdvHint);


        // Repeat for sub categories
        if(kategori.altKategoriler)
        {
            let useHint = kategori.kdv;
            if(kategori.kdv == 0){
                useHint = kategori.kdvHint;
                
            }else{
                useHint = kategori.kdv
            }


            render(kategori.altKategoriler,useHint);
        }
    }
}


class Kategori{
    name?:string;
    kdv?:number;
    kdvHint?:number;
    altKategoriler?:Kategori[]
}
