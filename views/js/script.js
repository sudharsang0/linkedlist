var val1,val2,setv;
function  check(){
   val1= document.getElementById("list1").value;
   val2 = document.getElementById("list2").value;
    var radios = document.getElementsByName('rate');
    for (var radio of radios)
    {
        if (radio.checked) {
            setv = radio.value;
            break;
        }
        else{
            setv = null;
        }
    }

    if(val1.length < 1 || val2.length < 1 || setv == null){
        alert("enter value in all fields");
        reset();
        return false;
    }
    else{
       return true;
    }
}class Node{
    constructor(d)
    {
        this.data = d;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }
    push(new_data)
    {
        var new_node = new Node(new_data);
        new_node.next = this.head;
        this.head = new_node;
    }
    isPresent(head, data)
    {
        var t = head;
        while (t != null) {
            if (t.data == data)
                return true;
            t = t.next;
        }
        return false;
    }
}
function run(){
    var list1 = new LinkedList();
    var list2 = new LinkedList();
    var str;
    if(check()){
    val1 = val1.trim();
    val2 = val2.trim();
    val1 = val1.replace(/ {2,}/g,' ');
    val2 = val2.replace(/ {2,}/g,' ');
    val1 = val1.split(" ");
    val2 = val2.split(" ");
    
    for(var i=0;i<val1.length;i++){
        list1.push(val1[i]);
    }
    for(var i=0;i<val2.length;i++){
        list2.push(val2[i]);
    }
    if(setv == "union"){
        var list3 = new LinkedList();
        var current1 = list1.head;
        var current2 = list2.head;
        while(current1 != null){
            list3.push(current1.data);
            current1 = current1.next;
        }
        while(current2 != null){
            if(!list3.isPresent(list3.head,current2.data)){
                list3.push(current2.data);
            }
            current2 = current2.next;
        }
        print(list3);     
    }
    
    else if(setv == "intersection"){
        var list3 = new LinkedList();
        var current1 = list1.head;
        var current2 = list2.head;
        while(current1 != null){
            while(current2 != null){
                if(current1.data == current2.data){
                    list3.push(current1.data);
                }
                current2 = current2.next;
            }
            current1 = current1.next;
            current2 = list2.head;
        }
       print(list3);
    }

}
}
function reset(){
    document.getElementById("list1").value="";
    document.getElementById("list2").value="";
    document.getElementById("sect").value="";
}
function print(list3){
    str = list3.head.data;
        current3 = list3.head.next;
        while(current3 != null){
            str+= " -> " + current3.data;
            current3 = current3.next;
        }
        str += " -> null";
        document.getElementById("result").value = str;
}
