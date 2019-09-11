export const fruitMixin = {
    data(){
        return {
            fruits: ['Apple', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits(){
            return this.fruits.filter((element) => {
                // console.log(element);
                return element.match(this.filterText);
            })
        }
    },
    created(){
        console.log('inside list')
    }
};