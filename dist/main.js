(()=>{"use strict";class t{constructor(t,e,n,i){this.title=t,this.description=e,this.dueDate=n,this.priority=i,this.notes=[],this.checklist=[]}}class e{constructor(t){this.title=t,this.items={},this.active=!1}}function n(t){return new e(t)}function i(){return JSON.parse(localStorage.getItem("listCollection"))}function o(t){localStorage.setItem("listCollection",JSON.stringify(t))}const l=document.getElementById("lists-container");function c(t){!function(){for(;l.firstChild;)l.firstChild.remove()}();for(const[e,n]of Object.entries(t)){let t=document.createElement("button");t.dataset.id=e,t.innerHTML=n.title,1==n.active?t.dataset.active=!0:t.dataset.active=!1,l.appendChild(t)}}document.getElementById("add-todo").addEventListener("click",(function(){let e=function(){let e=[document.getElementById("title").value,document.getElementById("description").value,document.getElementById("dueDate").value,document.getElementById("priority").value];return new t(e[0],e[1],e[2],e[3])}(),n=function(){let t=l.children;for(let e=0;e<t.length;e++){let n=t[e];if(1==n.dataset.active)return n}}();console.log(n),console.log(e)})),document.getElementById("add-todolist").addEventListener("click",(function(){let t=n(document.getElementById("list-title").value),e=i(),l=Object.keys(e);e[parseInt(l[l.length-1])+1]=t,o(e),c(e)})),window.onload=function(){c(function(){let t;return t=0==localStorage.length?function(){let t={},e=n("Default List");return e.active=!0,t[1]=e,o(t),t}():i(),t}())}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFDSkMsWUFBWUMsRUFBT0MsRUFBYUMsRUFBU0MsR0FDdkNDLEtBQUtKLE1BQVFBLEVBQ2JJLEtBQUtILFlBQWNBLEVBQ25CRyxLQUFLRixRQUFVQSxFQUNmRSxLQUFLRCxTQUFXQSxFQUNoQkMsS0FBS0MsTUFBUSxHQUNiRCxLQUFLRSxVQUFZLElDUHJCLE1BQU1DLEVBQ0pSLFlBQVlDLEdBQ1ZJLEtBQUtKLE1BQVFBLEVBQ2JJLEtBQUtJLE1BQVEsR0FDYkosS0FBS0ssUUFBUyxHQUlILFNBQVNDLEVBQWVWLEdBRXJDLE9BRFcsSUFBSU8sRUFBU1AsR0NUMUIsU0FBU1csSUFFUCxPQURxQkMsS0FBS0MsTUFBTUMsYUFBYUMsUUFBUSxtQkFJdkQsU0FBU0MsRUFBY0MsR0FDckJILGFBQWFJLFFBQVEsaUJBQWtCTixLQUFLTyxVQUFVRixJQ0Z4RCxNQUFNRyxFQUFZQyxTQUFTQyxlQUFlLG1CQXlDMUMsU0FBU0MsRUFBWU4sSUEyQ3JCLFdBQ0UsS0FBT0csRUFBVUksWUFDZkosRUFBVUksV0FBV0MsU0E1Q3ZCQyxHQUNBLElBQUssTUFBT0MsRUFBS0MsS0FBVUMsT0FBT0MsUUFBUWIsR0FBaUIsQ0FDekQsSUFBSWMsRUFBU1YsU0FBU1csY0FBYyxVQUNwQ0QsRUFBT0UsUUFBUUMsR0FBS1AsRUFDcEJJLEVBQU9JLFVBQVlQLEVBQU01QixNQUVMLEdBQWhCNEIsRUFBTW5CLE9BQ1JzQixFQUFPRSxRQUFReEIsUUFBUyxFQUV4QnNCLEVBQU9FLFFBQVF4QixRQUFTLEVBRzFCVyxFQUFVZ0IsWUFBWUwsSUFwRDFCVixTQUFTQyxlQUFlLFlBQVllLGlCQUFpQixTQUFTLFdBQzVELElBQUlDLEVISVMsV0FDYixJQUFJQyxFQWlCRyxDQUxLbEIsU0FBU0MsZUFBZSxTQUFTTSxNQUMzQlAsU0FBU0MsZUFBZSxlQUFlTSxNQUMzQ1AsU0FBU0MsZUFBZSxXQUFXTSxNQUNsQ1AsU0FBU0MsZUFBZSxZQUFZTSxPQVBuRCxPQURXLElBQUk5QixFQUxIeUMsRUFBSyxHQUNDQSxFQUFLLEdBQ1RBLEVBQUssR0FDSkEsRUFBSyxJR1ZUQyxHQUNQQyxFQXNETixXQUNFLElBQUlDLEVBQVd0QixFQUFVc0IsU0FDekIsSUFBSyxJQUFJQyxFQUFJLEVBQUdBLEVBQUlELEVBQVNFLE9BQVFELElBQUssQ0FDeEMsSUFBSUUsRUFBUUgsRUFBU0MsR0FDckIsR0FBNEIsR0FBeEJFLEVBQU1aLFFBQVF4QixPQUNoQixPQUFPb0MsR0EzRE1DLEdBRWpCQyxRQUFRQyxJQUFJUCxHQUVaTSxRQUFRQyxJQUFJVixNQUdkakIsU0FBU0MsZUFBZSxnQkFBZ0JlLGlCQUFpQixTQUFTLFdBQ2hFLElBQ0lZLEVBQVV2QyxFQW1FRlcsU0FBU0MsZUFBZSxjQUFjTSxPQWxFOUNYLEVBQWlCTixJQUNqQnVDLEVBQU9yQixPQUFPcUIsS0FBS2pDLEdBR3ZCQSxFQUZha0MsU0FBU0QsRUFBS0EsRUFBS04sT0FBTyxJQUFNLEdBRXBCSyxFQUN6QmpDLEVBQWNDLEdBQ2RNLEVBQVlOLE1BSWRtQyxPQUFPQyxPQUFTLFdBRWQ5QixFQTBDRixXQUNFLElBQUlOLEVBT0osT0FKRUEsRUFEeUIsR0FBdkJILGFBQWE4QixPQXpDbkIsV0FDRSxJQUFJM0IsRUFBaUIsR0FDakJxQyxFQUFPNUMsRUFBZSxnQkFNMUIsT0FMQTRDLEVBQUs3QyxRQUFTLEVBRWRRLEVBQWUsR0FBS3FDLEVBQ3BCdEMsRUFBY0MsR0FFUEEsRUFrQ1lzQyxHQUVBNUMsSUFFWk0sRUFuRGN1QyxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3RvZG8taXRlbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdG9kby1saXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIHRvZG9JdGVtIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IFtdO1xuICAgIHRoaXMuY2hlY2tsaXN0ID0gW107XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOZXdUb0RvKCkge1xuICBsZXQgaW5mbyA9IGdldFRvZG9JbmZvKCk7XG5cbiAgbGV0IHRpdGxlID0gaW5mb1swXSxcbiAgICAgIGRlc2NyaXB0aW9uID0gaW5mb1sxXSwgXG4gICAgICBkdWVEYXRlID0gaW5mb1syXSwgXG4gICAgICBwcmlvcml0eSA9IGluZm9bM107XG5cbiAgbGV0IHRvZG8gPSBuZXcgdG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gIHJldHVybiB0b2RvO1xufTtcblxuZnVuY3Rpb24gZ2V0VG9kb0luZm8oKSB7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlO1xuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xuXG4gIHJldHVybiBbXG4gICAgdGl0bGUsIFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHlcbiAgXTtcbn07XG5cbiIsImNsYXNzIHRvZG9MaXN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb0RvTGlzdCh0aXRsZSkge1xuICBsZXQgbGlzdCA9IG5ldyB0b2RvTGlzdCh0aXRsZSk7XG4gIHJldHVybiBsaXN0O1xufTtcblxuIiwiZnVuY3Rpb24gbG9hZEZyb21TdG9yYWdlKCkge1xuICBsZXQgbGlzdENvbGxlY3Rpb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdENvbGxlY3Rpb25cIikpO1xuICByZXR1cm4gbGlzdENvbGxlY3Rpb247XG59O1xuXG5mdW5jdGlvbiBzYXZlVG9TdG9yYWdlKGxpc3RDb2xsZWN0aW9uKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdENvbGxlY3Rpb25cIiwgSlNPTi5zdHJpbmdpZnkobGlzdENvbGxlY3Rpb24pKTtcbn07XG5cbmV4cG9ydCB7IGxvYWRGcm9tU3RvcmFnZSwgc2F2ZVRvU3RvcmFnZSB9IiwiaW1wb3J0IGNyZWF0ZU5ld1RvRG8gZnJvbSBcIi4vdG9kby1pdGVtXCI7XG5pbXBvcnQgY3JlYXRlVG9Eb0xpc3QgZnJvbSBcIi4vdG9kby1saXN0XCI7XG5pbXBvcnQgeyBzYXZlVG9TdG9yYWdlLCBsb2FkRnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0cy1jb250YWluZXJcIik7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICBsZXQgdG9kbyA9IGNyZWF0ZU5ld1RvRG8oKTtcbiAgbGV0IGFjdGl2ZUxpc3QgPSBnZXRBY3RpdmVMaXN0KCk7XG5cbiAgY29uc29sZS5sb2coYWN0aXZlTGlzdCk7XG5cbiAgY29uc29sZS5sb2codG9kbyk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kb2xpc3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICBsZXQgdGl0bGUgPSBnZXRUb2RvTGlzdEluZm8oKTtcbiAgbGV0IG5ld0xpc3QgPSBjcmVhdGVUb0RvTGlzdCh0aXRsZSk7XG4gIGxldCBsaXN0Q29sbGVjdGlvbiA9IGxvYWRGcm9tU3RvcmFnZSgpO1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGxpc3RDb2xsZWN0aW9uKTtcbiAgbGV0IG5ld0tleSA9IHBhcnNlSW50KGtleXNba2V5cy5sZW5ndGgtMV0pICsgMVxuXG4gIGxpc3RDb2xsZWN0aW9uW25ld0tleV0gPSBuZXdMaXN0O1xuICBzYXZlVG9TdG9yYWdlKGxpc3RDb2xsZWN0aW9uKTtcbiAgZGlzcGxheUxpc3QobGlzdENvbGxlY3Rpb24pO1xuXG59KVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGxldCBsaXN0Q29sbGVjdGlvbiA9IGNoZWNrTG9jYWxGb3JFbXB0eSgpO1xuICBkaXNwbGF5TGlzdChsaXN0Q29sbGVjdGlvbik7XG5cbn07IFxuXG5mdW5jdGlvbiBpbml0aWFsaXplUGFnZSgpIHtcbiAgbGV0IGxpc3RDb2xsZWN0aW9uID0ge307XG4gIGxldCBsaXN0ID0gY3JlYXRlVG9Eb0xpc3QoXCJEZWZhdWx0IExpc3RcIik7XG4gIGxpc3QuYWN0aXZlID0gdHJ1ZTtcblxuICBsaXN0Q29sbGVjdGlvblsxXSA9IGxpc3Q7XG4gIHNhdmVUb1N0b3JhZ2UobGlzdENvbGxlY3Rpb24pO1xuXG4gIHJldHVybiBsaXN0Q29sbGVjdGlvbjtcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlMaXN0KGxpc3RDb2xsZWN0aW9uKSB7XG4gIHdpcGVDb250YWluZXIoKTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobGlzdENvbGxlY3Rpb24pKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmRhdGFzZXQuaWQgPSBrZXk7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IHZhbHVlLnRpdGxlO1xuICBcbiAgICBpZiAodmFsdWUuYWN0aXZlID09IHRydWUpIHtcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG4gIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0QWN0aXZlTGlzdCgpIHtcbiAgbGV0IGNoaWxkcmVuID0gY29udGFpbmVyLmNoaWxkcmVuO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgaWYgKGNoaWxkLmRhdGFzZXQuYWN0aXZlID09IHRydWUpIHtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9O1xuICB9O1xufTtcblxuZnVuY3Rpb24gY2hlY2tMb2NhbEZvckVtcHR5ICgpIHtcbiAgbGV0IGxpc3RDb2xsZWN0aW9uO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID09IDApIHtcbiAgICBsaXN0Q29sbGVjdGlvbiA9IGluaXRpYWxpemVQYWdlKCk7XG4gIH0gZWxzZSB7XG4gICAgbGlzdENvbGxlY3Rpb24gPSBsb2FkRnJvbVN0b3JhZ2UoKTtcbiAgfTtcbiAgcmV0dXJuIGxpc3RDb2xsZWN0aW9uO1xufTtcblxuZnVuY3Rpb24gZ2V0VG9kb0xpc3RJbmZvKCkge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtdGl0bGVcIikudmFsdWU7XG4gIHJldHVybiB0aXRsZTtcbn07XG5cbmZ1bmN0aW9uIHdpcGVDb250YWluZXIoKSB7XG4gIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9O1xufTtcblxuIl0sIm5hbWVzIjpbInRvZG9JdGVtIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwidGhpcyIsIm5vdGVzIiwiY2hlY2tsaXN0IiwidG9kb0xpc3QiLCJpdGVtcyIsImFjdGl2ZSIsImNyZWF0ZVRvRG9MaXN0IiwibG9hZEZyb21TdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVUb1N0b3JhZ2UiLCJsaXN0Q29sbGVjdGlvbiIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzcGxheUxpc3QiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwid2lwZUNvbnRhaW5lciIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiaWQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2RvIiwiaW5mbyIsImNyZWF0ZU5ld1RvRG8iLCJhY3RpdmVMaXN0IiwiY2hpbGRyZW4iLCJpIiwibGVuZ3RoIiwiY2hpbGQiLCJnZXRBY3RpdmVMaXN0IiwiY29uc29sZSIsImxvZyIsIm5ld0xpc3QiLCJrZXlzIiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJsaXN0IiwiaW5pdGlhbGl6ZVBhZ2UiLCJjaGVja0xvY2FsRm9yRW1wdHkiXSwic291cmNlUm9vdCI6IiJ9