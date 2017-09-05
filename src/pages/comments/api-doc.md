/pautas/(?P<id>\d+)/getLikes

/pautas/(?P<id>\d+)/getUnlikes

/comments/(?P<id>\d+)/getLikes

/comments/(?P<id>\d+)/getUnlikes


comments/id/like


/pautas/(?P<id>\d+)/isLiked

/pautas/(?P<id>\d+)/isUnliked

/comments/(?P<id>\d+)/isLiked

/comments/(?P<id>\d+)/isUnliked

COLOCAR NO MENU

<button menuClose ion-item large *ngIf="isLoggedIn()" (click)="requestMe()"><ion-icon ios="ios-contact" md="md-contact"></ion-icon> Usuario</button>