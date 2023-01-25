                var arr = 0;
                var x_cord = 0;
                var position = 0;
                if(this.p1===position) matrix[arr][x_cord] = 1;
                if(this.p2===position) matrix[arr][x_cord] = 2;
                if(this.p3===position) matrix[arr][x_cord] = 3;
                if(this.p4===position) matrix[arr][x_cord] = 4;

                arr = 1;
                x_cord = 0;
                position = 128;
                if(this.p1===position) matrix[arr][x_cord] = 1;
                if(this.p2===position) matrix[arr][x_cord] = 2;
                if(this.p3===position) matrix[arr][x_cord] = 3;
                if(this.p4===position) matrix[arr][x_cord] = 4;

                arr = 2;
                x_cord = 0;
                position = 256;
                if(this.p1===position) matrix[arr][x_cord] = 1;
                if(this.p2===position) matrix[arr][x_cord] = 2;
                if(this.p3===position) matrix[arr][x_cord] = 3;
                if(this.p4===position) matrix[arr][x_cord] = 4;

                console.log("eka")
                console.log(this.p1);
                console.log(this.images[this.pic_number1]);
                console.log(this.p2);
                console.log(this.images[this.pic_number2]);
                console.log(this.p3);
                console.log(this.images[this.pic_number3]);
                console.log(this.p4);
                console.log(this.images[this.pic_number4]);
            }
            Stop1 = true;
        }
        else if (this.rounds2 === 0 && this.rounds3 !== 0 && this.y === 0 * pic_height || this.rounds2 === 0 && this.rounds3 !== 0 && this.y === 1 * pic_height || this.rounds2 === 0 && this.rounds3 !== 0 && this.y === 2 * pic_height) {
            this.rounds3 = Math.floor(Math.random() * this.random1 + this.random2)
            if(Stop1===true && Stop2 ===false) {

                arr = 0;
                x_cord = 2;
                position = 0;
                if(this.p1===position) matrix[arr][x_cord] = 1;
                if(this.p2===position) matrix[arr][x_cord] = 2;
                if(this.p3===position) matrix[arr][x_cord] = 3;
                if(this.p4===position) matrix[arr][x_cord] = 4;

                arr = 1;
                x_cord = 2;
                position = 128;
                if(this.p1===position) matrix[arr][x_cord] = 1;
                if(this.p2===position) matrix[arr][x_cord] = 2;
                if(this.p3===position) matrix[arr][x_cord] = 3;
                if(this.p4===position) matrix[arr][x_cord] = 4;

                arr = 2;
                x_cord = 2;
                position = 256;
                if(this.p1===position) matrix[arr][x_cord] = 1;
                if(this.p2===position) matrix[arr][x_cord] = 2;
                if(this.p3===position) matrix[arr][x_cord] = 3;
                if(this.p4===position) matrix[arr][x_cord] = 4;

                console.log("kolmas")
                console.log(this.p1);
                console.log(this.images[this.pic_number1]);
                console.log(this.p2);
                console.log(this.images[this.pic_number2]);
                console.log(this.p3);
                console.log(this.images[this.pic_number3]);
                console.log(this.p4);
                console.log(this.images[this.pic_number4]);
            }
            Stop3 = true;
        }
        else if (this.rounds4 === 0 && this.rounds5 !== 0 && this.y === 0 * pic_height || this.rounds4 === 0 && this.rounds5 !== 0 && this.y === 1 * pic_height || this.rounds4 === 0 && this.rounds5 !== 0 && this.y === 2 * pic_height) {
            this.rounds5 = Math.floor(Math.random() * this.random1 + this.random2);
            if(Stop3===true && Stop4 ===false) {

                arr = 0;
                x_cord = 3;
                position = 0;
                if(this.p1===position) matrix[arr][x_cord] = 1;
                if(this.p2===position) matrix[arr][x_cord] = 2;
                if(this.p3===position) matrix[arr][x_cord] = 3;
                if(this.p4===position) matrix[arr][x_cord] = 4;

                arr = 1;
                x_cord = 3;
                position = 128;
                if(this.p1===position) matrix[arr][x_cord] = 1;
                if(this.p2===position) matrix[arr][x_cord] = 2;
                if(this.p3===position) matrix[arr][x_cord] = 3;
                if(this.p4===position) matrix[arr][x_cord] = 4;

                arr = 2;
                x_cord = 3;
                position = 256;
                if(this.p1===position) matrix[arr][x_cord] = 1;
                if(this.p2===position) matrix[arr][x_cord] = 2;
                if(this.p3===position) matrix[arr][x_cord] = 3;
                if(this.p4===position) matrix[arr][x_cord] = 4;

                console.log("neljas")
                console.log(this.p1);
                console.log(this.images[this.pic_number1]);
                console.log(this.p2);
                console.log(this.images[this.pic_number2]);
                console.log(this.p3);
                console.log(this.images[this.pic_number3]);
                console.log(this.p4);
                console.log(this.images[this.pic_number4]);
            }
            Stop4 = true;
        }
        else if (this.rounds5 === 0 && this.y === 0 * pic_height || this.rounds5 === 0 && this.y === 1 * pic_height || this.rounds5 === 0 && this.y === 2 * pic_height ) {
            if(Stop4===true && Stop5 ===false) {

                arr = 0;
                x_cord = 4;
                position = 0;
                if(this.p1===position) matrix[arr][x_cord] = 1;
                if(this.p2===position) matrix[arr][x_cord] = 2;
                if(this.p3===position) matrix[arr][x_cord] = 3;
                if(this.p4===position) matrix[arr][x_cord] = 4;

                arr = 1;
                x_cord = 4;
                position = 128;
                if(this.p1===position) matrix[arr][x_cord] = 1;
                if(this.p2===position) matrix[arr][x_cord] = 2;
                if(this.p3===position) matrix[arr][x_cord] = 3;
                if(this.p4===position) matrix[arr][x_cord] = 4;

                arr = 2;
                x_cord = 4;
                position = 256;
                if(this.p1===position) matrix[arr][x_cord] = 1;
                if(this.p2===position) matrix[arr][x_cord] = 2;
                if(this.p3===position) matrix[arr][x_cord] = 3;
                if(this.p4===position) matrix[arr][x_cord] = 4;
