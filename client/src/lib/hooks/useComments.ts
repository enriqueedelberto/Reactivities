import { HubConnection, HubConnectionBuilder, HubConnectionState } from '@microsoft/signalr';
import { useLocalObservable } from "mobx-react-lite"
import { useEffect } from 'react';

export const useComments = (activityId?: string) =>{
  const commentStore = useLocalObservable(()=>({
     hubConnection: null as HubConnection | null,

     createHubConnection(activityId: string){
        if(!activityId) return;

        this.hubConnection = new HubConnectionBuilder()
             .withUrl(`${import.meta.env.VITE_COMMENTS_URL}?=${activityId}`, {
                withCredentials: true
             })
             .withAutomaticReconnect()
             .build();

             this.hubConnection.start().catch(error => 
                 console.log('Error with connection', error));

     },

     stopHubConnection(){
        if(this.hubConnection?.state == HubConnectionState.Connected){
            this.hubConnection.stop().catch(error => 
                 console.log('Error with stopping connection', error));
        }
     }
  }));

  useEffect(() => {
    if(activityId){
        commentStore.createHubConnection(activityId);
    }

    return () => {
        commentStore.stopHubConnection();
    }
  }, [activityId, commentStore]);

  return {
    commentStore
  }
}