<template>
  <div class="container">
    <app-header :quoteCount="quotesData.length" :maxQuotes="maxQuotesData"></app-header>
    <app-new-quote @quoteAdded="newQuote()"></app-new-quote>
    <app-quote-grid :quotes="quotesData" @quoteDeleted="deleteQuote()"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

    export default {
        data() {
            return {
                quotesData: [
                    'Just a Quote to see something'
                ],
                maxQuotesData: 10
            }
        },
        methods: {
            newQuote(quote) {
                if (this.quotesData.length >= this.maxQuotesData) {
                    return alert('Please delete Quotes first!');
                }
                this.quotesData.push(quote);
            },
            deleteQuote(index) {
                this.quotesData.splice(index, 1);
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        }
    }
</script>

<style>
</style>
