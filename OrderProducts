import { LightningElement, wire,api,track} from 'lwc';	
import getProducts from '@salesforce/apex/OrderProducts.getOrderProducts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ORDER_OBJECT from "@salesforce/schema/Order";
import ID_FIELD from "@salesforce/schema/Order.Id";
import STATUS_FIELD from "@salesforce/schema/Order.Status";
import { updateRecord } from "lightning/uiRecordApi";
//import { MessageContext, subscribe } from 'lightning/messageService';
//import SAMPLEMC from "@salesforce/messageChannel/orderProductsMessageChannel__c"; 

export default class OrderDetails extends LightningElement {
    @api recordId;
    @api productsColumns;
    @api records;
    @track lstSelectedRecords;
    @track isLoading=false;
    @api messageReceived=null;
    productsColumns = [
        { label: 'Product Name', fieldName: 'Product_Name__c' },
        { label: 'Unit Price', fieldName: 'UnitPrice' },
        { label: 'Quantity', fieldName: 'Quantity' },       
        { label: 'Total Price', fieldName: 'TotalPrice' }
      
    ];
    @wire(getProducts, {
        recordId: '$recordId' })
        wireRecordList({data,error}){
            if(data){
                this.records = data;
                this.error = undefined;
                this.dataNotFound = '';
                if(this.records == ''){
                this.dataNotFound = 'There is no products found related to PB name';
                }
                }else{
                this.error = error;
                this.data=undefined;
                }
            }

        handleClick() { 
            this.isLoading=true;               
              const fields = {};          
              fields[ID_FIELD.fieldApiName] = this.recordId;
              fields[STATUS_FIELD.fieldApiName] = 'Activated';             
              const recordInput = {
                fields: fields
              };

             updateRecord(recordInput).then((record) => { 
                this.isLoading=false; 
                this.updateRecordView();              
                this.showToast('Success', 'Order is Activated successfully!', 'Success', 'dismissable');                   
              }).catch(error => {
                this.showToast('Error updating or refreshing records', error.body.message, 'Error', 'dismissable');
            });
            }
            showToast(title, message, variant, mode) {
                const event = new ShowToastEvent({
                    title: title,
                    message: message,
                    variant: variant,
                    mode: mode
                });
                this.dispatchEvent(event);
            } 

            updateRecordView() {
                setTimeout(() => {
                     eval("$A.get('e.force:refreshView').fire();");
                }, 1000); 
             }


           /*  @wire(MessageContext)
               messageContext;
               subscription =null;
               connectedCallback(){
                 this.subscribeMC();
               }

               subscribeMC(){
                 this.subscription=subscribe(this.messageContext,SAMPLEMC,(message)=>{
                    console.log('subscribed message '+message);
                    this.messageReceived = message.messageToSend;
                 })
               }*/
             


    
            
}
