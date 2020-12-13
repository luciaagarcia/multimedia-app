(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"player-container\">\n    <section id='video' class=\"video-estadisticas\">\n        <vg-player (onPlayerReady)=\"onPlayerReady($event)\">\n            <ng-container *ngIf=\"activeCuePoints\">\n                <div *ngFor=\"let cuePointData of activeCuePoints\" class=\"info-layer\">\n                    <h3><a [href]=\"cuePointData?.href\" target=\"_blank\">{{ cuePointData?.title }}</a></h3>\n                    <p>\n                        <img [src]=\"cuePointData?.src\" align=\"left\"> {{ cuePointData?.description }}\n                    </p>\n                    <div *ngIf=\"cuePointData?.botones.length > 0\">\n                        {{pauseVideo()}}\n                        <div class='crearBotones'>\n                            <div *ngFor=\"let boton of cuePointData?.botones\">\n                                <button class=\"myButton\" (click)=\"ComprobarAcierto(cuePointData,boton)\">{{boton}}</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n            <div class=\"cue-point-manager-layer\" *ngIf=\"showCuePointManager\">\n                <div class=\"close fa fa-close\" (click)=\"showCuePointManager = false\"></div>\n\n                <div class=\"cue-list\">\n                    <table class=\"cue-table\">\n                        <thead>\n                            <tr class=\"cue-row\">\n                                <th>Start Time</th>\n                                <th>End Time</th>\n                                <th class=\"json-header\">JSON</th>\n                                <th>Actions</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let cue of track?.cues\" class=\"cue-row\">\n                                <td>{{ cue.startTime }}</td>\n                                <td>{{ cue.endTime }}</td>\n                                <td class=\"json\">{{ json.parse(cue.text).title }}</td>\n                                <td class=\"actions\">\n                                    <button type=\"button\" (click)=\"onClickRemove(cue)\">Remove</button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n                <div class=\"add-cue\">\n                    <h2>Añade una pista de información</h2>\n\n                    <form name=\"cueForm\" #formRef=\"ngForm\" (submit)=\"onSubmit(formRef, $event)\">\n                        <div class=\"form-field\">\n                            <label for=\"startTime\">Inicio</label>\n                            <input type=\"number\" id=\"startTime\" name=\"startTime\" [(ngModel)]=\"newCue.startTime\" required>\n                        </div>\n                        <div class=\"form-field\">\n                            <label for=\"endTime\">Fin</label>\n                            <input type=\"number\" id=\"endTime\" name=\"endTime\" [(ngModel)]=\"newCue.endTime\" required>\n                        </div>\n                        <div class=\"form-field\">\n                            <label for=\"title\">Título</label>\n                            <input type=\"text\" id=\"title\" name=\"title\" [(ngModel)]=\"newCue.title\" required>\n                        </div>\n                        <div class=\"form-field\">\n                            <label for=\"description\">Descripción</label>\n                            <input type=\"text\" id=\"description\" name=\"description\" [(ngModel)]=\"newCue.description\" required>\n                        </div>\n                        <div class=\"form-field\">\n                            <label for=\"src\">Imagen URL</label>\n                            <input type=\"text\" id=\"src\" name=\"src\" [(ngModel)]=\"newCue.src\" required>\n                        </div>\n                        <div class=\"form-field\">\n                            <label for=\"href\">Link</label>\n                            <input type=\"text\" id=\"href\" name=\"href\" [(ngModel)]=\"newCue.href\" required>\n                        </div>\n                        <div class=\"form-field\">\n                            <label for=\"href\">Botones (opcional)</label>\n                            <input type=\"text\" id=\"href\" name=\"botones\" [(ngModel)]=\"newCue.botones\" required>\n                        </div>\n                        <div class=\"form-field\">\n                            <label for=\"href\">Acierto</label>\n                            <input type=\"text\" id=\"href\" name=\"acierto\" [(ngModel)]=\"newCue.acierto\" required>\n                        </div>\n\n                        <button type=\"submit\" [disabled]=\"!formRef.valid\">Add Cue</button>\n                    </form>\n                </div>\n            </div>\n\n            <vg-buffering></vg-buffering>\n            <vg-controls>\n                <vg-play-pause></vg-play-pause>\n                <vg-playback-button></vg-playback-button>\n\n                <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\n\n                <vg-scrub-bar>\n                    <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n                    <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n                    <vg-scrub-bar-cue-points [vgCuePoints]=\"metadataTrack.cues\"></vg-scrub-bar-cue-points>\n                </vg-scrub-bar>\n\n                <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\n                <div class=\"cue-point-manager-button fa fa-thumb-tack\" (click)=\"showCuePointManager = !showCuePointManager\"></div>\n\n                <vg-mute></vg-mute>\n                <vg-volume></vg-volume>\n\n                <vg-fullscreen></vg-fullscreen>\n            </vg-controls>\n\n            <video #media [vgMedia]=\"media\" [src]=\"currentItem.src\" id=\"singleVideo\" preload=\"auto\" type=\"video/mp4\" crossorigin>\n                <track [src]=\"currentItem.cue\" kind=\"metadata\" label=\"Cue Points\" default\n               #metadataTrack\n               vgCuePoints\n               (onEnterCuePoint)=\"onEnterCuePoint($event)\"\n               (onExitCuePoint)=\"onExitCuePoint($event)\">\n            </video>\n        </vg-player>\n        <section class=\"estadisticas\" width=\"1280px\">\n            <div>\n                <ul class=\"gallery\">\n                    <li *ngFor=\"let item of playlist; let $index = index\" (click)=\"onClickPlaylistItem(item, $index)\" [class.selected]=\"item === currentItem\">\n                        <a><img class=\"ImgPoster\" src={{item.poster}}></a>\n                    </li>\n                </ul>\n            </div>\n        </section>\n    </section>\n    <section class=\"listaReproduccion\">\n\n    </section>\n</section>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host.is-standalone aside {\n    display: none;\n}\n\n:host.is-standalone .player-container {\n    padding: 0;\n    margin: 0;\n}\n\naside {\n    background-color: #0a4646;\n    height: 100%;\n    position: fixed;\n}\n\n.logo {\n    padding: 10px;\n}\n\n.menu {\n    width: 250px;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    font-size: 18px;\n    font-family: sans-serif;\n}\n\n.menu li {\n    padding: 5px 10px;\n    cursor: pointer;\n}\n\n.player-container {\n    width: 100%;\n    height: 650px;\n    margin-left: 25px;\n    margin-right: 50px;\n}\n\nvideo {\n    width: 100%;\n    height: 100%;\n}\n\n.ImgPoster {\n    width: 350px;\n    height: 200px;\n    border: 7px outset #114161;\n}\n\n/* Lista de reproducción*/\n\n.player-container {\n    display: -webkit-box;\n    display: flex;\n    padding-top: 1.2rem;\n    -webkit-box-align: inherit;\n            align-items: inherit;\n}\n\n.video-estadisticas {\n    display: block;\n    width: 75%;\n}\n\n.estadisticas {\n    margin-top: 10px;\n}\n\n#listaReproduccion .botones {\n    display: inline-block;\n}\n\n.listaReproduccion {\n    background-color: #ffffff4f;\n    margin-left: 10px;\n    width: 25%;\n}\n\n.boton_personalizado {\n    background-color: #0a4646;\n    color: white;\n    padding: 10px;\n    font-weight: 600;\n    border-radius: 6px;\n}\n\n/* Lista de reproducción */\n\nul {\n    justify-content: space-around;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n    background-color: #ffffff4f;\n    white-space: nowrap;\n    height: 300px;\n    width: auto;\n}\n\nul a {\n    display: inline-block;\n    color: white;\n    text-align: center;\n    padding: 14px;\n    text-decoration: none;\n}\n\nli {\n    float: left;\n    display: inline;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 16px;\n    text-decoration: none;\n}\n\nli a:hover {\n    background-color: #111111;\n}\n\n/* Cue Points */\n\n.info-layer {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    position: absolute;\n    right: 0;\n    width: 25%;\n    height: 100%;\n    font-family: sans-serif;\n    color: white;\n    z-index: 250;\n    background-color: rgba(0, 0, 0, 0.7);\n    padding: 30px;\n}\n\n.info-layer img {\n    width: 40px;\n    height: auto;\n    padding-right: 20px;\n}\n\n.info-layer a,\n.info-layer a:visited {\n    color: white;\n}\n\n.cue-point-manager-button {\n    color: #FFF;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    height: 50px;\n    width: 50px;\n    cursor: pointer;\n    line-height: 50px;\n}\n\n.cue-point-manager-layer {\n    position: absolute;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    background-color: rgba(0, 0, 0, 0.75);\n    color: #FFF;\n    width: 100%;\n    height: 100%;\n    z-index: 400;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n}\n\n::cue {\n    visibility: hidden;\n}\n\n.cue-list {\n    -webkit-box-flex: 2;\n            flex: 2;\n}\n\n.cue-table {\n    width: 100%;\n    padding: 30px;\n}\n\n.cue-row .json-header {\n    width: 60%;\n}\n\n.cue-row .json {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 400px;\n    display: inline-block;\n}\n\n.cue-row .actions {\n    text-align: center;\n}\n\n.form-field {\n    padding: 0 30px 10px 0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n\n.add-cue {\n    -webkit-box-flex: 1;\n            flex: 1;\n}\n\n.close {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    width: 30px;\n    height: 30px;\n    color: white;\n    cursor: pointer;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n.myButton {\n    box-shadow: 11px 10px 14px -7px #276873;\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #35317d), to(#00d5ff));\n    background: linear-gradient(to bottom, #35317d 5%, #00d5ff 100%);\n    background-color: #35317d;\n    border-radius: 8px;\n    display: inline-block;\n    cursor: pointer;\n    color: #ffffff;\n    border: 0;\n    font-family: Arial;\n    font-size: 20px;\n    font-weight: bold;\n    padding: 6px 10px;\n    text-decoration: none;\n    text-shadow: 0px 1px 0px #3d768a;\n    margin-top: 10px;\n}\n\n.myButton:hover {\n    background: black;\n    background-color: #00d5ff;\n}\n\n.myButton:active {\n    position: relative;\n    top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtBQUM5Qjs7QUFHQSx5QkFBeUI7O0FBRXpCO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBCQUFvQjtZQUFwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUdBLDBCQUEwQjs7QUFFMUI7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLGVBQWU7O0FBRWY7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJEQUEyRDtJQUMzRCxxQ0FBcUM7SUFDckMsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQU87WUFBUCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG1CQUFPO1lBQVAsT0FBTztBQUNYOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxpR0FBZ0U7SUFBaEUsZ0VBQWdFO0lBQ2hFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsU0FBUztJQUNULGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC5pcy1zdGFuZGFsb25lIGFzaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdC5pcy1zdGFuZGFsb25lIC5wbGF5ZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuYXNpZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTQ2NDY7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmxvZ28ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tZW51IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLm1lbnUgbGkge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBsYXllci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG52aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uSW1nUG9zdGVyIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXI6IDdweCBvdXRzZXQgIzExNDE2MTtcbn1cblxuXG4vKiBMaXN0YSBkZSByZXByb2R1Y2Npw7NuKi9cblxuLnBsYXllci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy10b3A6IDEuMnJlbTtcbiAgICBhbGlnbi1pdGVtczogaW5oZXJpdDtcbn1cblxuLnZpZGVvLWVzdGFkaXN0aWNhcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDc1JTtcbn1cblxuLmVzdGFkaXN0aWNhcyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI2xpc3RhUmVwcm9kdWNjaW9uIC5ib3RvbmVzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5saXN0YVJlcHJvZHVjY2lvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjRmO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi5ib3Rvbl9wZXJzb25hbGl6YWRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE0NjQ2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5cbi8qIExpc3RhIGRlIHJlcHJvZHVjY2nDs24gKi9cblxudWwge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNGY7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG51bCBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxubGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcbn1cblxuXG4vKiBDdWUgUG9pbnRzICovXG5cbi5pbmZvLWxheWVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAyNTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5pbmZvLWxheWVyIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5pbmZvLWxheWVyIGEsXG4uaW5mby1sYXllciBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1ZS1wb2ludC1tYW5hZ2VyLWJ1dHRvbiB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuXG4uY3VlLXBvaW50LW1hbmFnZXItbGF5ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDQwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbjo6Y3VlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5jdWUtbGlzdCB7XG4gICAgZmxleDogMjtcbn1cblxuLmN1ZS10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMzBweDtcbn1cblxuLmN1ZS1yb3cgLmpzb24taGVhZGVyIHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4uY3VlLXJvdyAuanNvbiB7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY3VlLXJvdyAuYWN0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS1maWVsZCB7XG4gICAgcGFkZGluZzogMCAzMHB4IDEwcHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFkZC1jdWUge1xuICAgIGZsZXg6IDE7XG59XG5cbi5jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5teUJ1dHRvbiB7XG4gICAgYm94LXNoYWRvdzogMTFweCAxMHB4IDE0cHggLTdweCAjMjc2ODczO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNTMxN2QgNSUsICMwMGQ1ZmYgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzE3ZDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4ICMzZDc2OGE7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm15QnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBkNWZmO1xufVxuXG4ubXlCdXR0b246YWN0aXZlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.isStandalone = "";
        this.activeCuePoints = [];
        this.showCuePointManager = false;
        this.newCue = {
            startTime: 40,
            endTime: 50,
            title: "Preguntas",
            description: "No es bueno que los animales estén gordos",
            src: "https://image.freepik.com/vector-gratis/diseno-ciervo-dibujado-mano_1106-8.jpg",
            href: "https://www.google.com",
            botones: [""],
            acierto: "",
        };
        this.json = JSON;
        this.playlist = [
            {
                title: "Animales en la junga",
                src: "./assets/animales-gordos.mp4",
                type: "video/mp4",
                cue: "./assets/data/AnimalesEnLaJungla.vtt",
                poster: "./assets/animales-gordos.jpg",
            },
            {
                title: "Oso polar (online)",
                src: "./assets/panda.mp4",
                type: "video/mp4",
                cue: "./assets/data/BigBuck.vtt",
                poster: "./assets/Panda.png",
            },
            {
                title: "Heinz",
                src: "./assets/heinz.mp4",
                type: "video/mp4",
                cue: "./assets/data/heinz.vtt",
                poster: "./assets/Heinz.png",
            },
        ];
        this.currentIndex = 0;
        this.currentItem = this.playlist[this.currentIndex];
    }
    ngOnInit() { }
    onPlayerReady(api) {
        this.api = api;
        this.track = this.api.textTracks[0];
        this.api
            .getDefaultMedia()
            .subscriptions.loadedMetadata.subscribe(this.pauseVideo.bind(this));
        this.api
            .getDefaultMedia()
            .subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
        this.api
            .getDefaultMedia()
            .subscriptions.ended.subscribe(this.nextVideo.bind(this));
    }
    onSubmit(form, event) {
        event.preventDefault();
        if (form.valid) {
            const jsonData = {
                title: form.value.title,
                description: form.value.description,
                src: form.value.src,
                href: form.value.href,
            };
            const jsonText = JSON.stringify(jsonData);
            this.track.addCue(new VTTCue(form.value.startTime, form.value.endTime, jsonText));
        }
    }
    onClickRemove(cue) {
        this.track.removeCue(cue);
    }
    onEnterCuePoint($event) {
        this.activeCuePoints.push(Object.assign({ id: $event.id }, JSON.parse($event.text)));
    }
    onExitCuePoint($event) {
        this.activeCuePoints = this.activeCuePoints.filter((c) => c.id !== $event.id);
    }
    nextVideo() {
        this.currentIndex++;
        this.respuestas = 0;
        this.aciertos = 0;
        if (this.currentIndex === this.playlist.length) {
            this.currentIndex = 0;
        }
        this.currentItem = this.playlist[this.currentIndex];
    }
    playVideo() {
        this.api.play();
    }
    pauseVideo() {
        this.api.pause();
    }
    reanudarVideo() {
        this.api.currentTime = this.api.currentTime + 5;
        this.api.play();
    }
    ComprobarAcierto(cuePoint, boton) {
        this.respuestas = this.respuestas + 1;
        if (boton === cuePoint.acierto) {
            this.aciertos = this.aciertos + 1;
            this.reanudarVideo();
        }
    }
    onClickPlaylistItem(item, index) {
        this.currentIndex = index;
        this.currentItem = item;
        this.respuestas = 0;
        this.aciertos = 0;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class")
], AppComponent.prototype, "isStandalone", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! videogular2/compiled/overlay-play */ "./node_modules/videogular2/compiled/overlay-play.js");
/* harmony import */ var videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! videogular2/compiled/core */ "./node_modules/videogular2/compiled/core.js");
/* harmony import */ var videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! videogular2/compiled/controls */ "./node_modules/videogular2/compiled/controls.js");
/* harmony import */ var videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! videogular2/compiled/buffering */ "./node_modules/videogular2/compiled/buffering.js");
/* harmony import */ var videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_7__["VgCoreModule"],
            videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_8__["VgControlsModule"],
            videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_9__["VgBufferingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_5__["VgOverlayPlayModule"],
            videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_8__["VgControlsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Users\02316079\Documents\Programas\Workspace\multimedia-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map