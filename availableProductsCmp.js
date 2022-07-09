<template>
   
<div class="slds-border_left">
    <div class="slds-border_right">
        <div class="slds-border_top">
            <div class="slds-border_bottom">
    <lightning-Card title="Available Products" icon-name="standard:account">
    <div class="acc-container">
        <div>
            <lightning-button variant="brand" label="Add Products" title="Looks like a link" onclick={addSelectedProducts} class="slds-m-left_x-small"></lightning-button>
        </div>       
        <br/> 
        <div class="slds-m-around_small">
           
            <template if:true={isLoading}>
                <div class="slds-p-around_x-large">
                    <lightning-spinner alternative-text="Loading" size="large" variant="brand"></lightning-spinner>
                </div>
            </template>
    
    </div> 
    <div style="height: 250px;">
        <lightning-datatable
        key-field="id"
            data={records}
            sorted-by={sortBy}
            sorted-direction={sortDirection}
            onsort={handleSortOrderData}
            columns={productsColumns}>
        </lightning-datatable>
    </div> 
    </div> 
    </lightning-Card> 
    </div>
      </div>
        </div>
          </div>
         
        
</template>
