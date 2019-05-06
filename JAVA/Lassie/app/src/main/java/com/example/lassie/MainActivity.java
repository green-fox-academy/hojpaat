package com.example.lassie;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;


public class MainActivity extends Activity {
//    TextView txt;
    Button btn;
//    String url ="https://www.thecrazyprogrammer.com/wp-content/uploads/demo.txt";
    private RequestQueue mRequestQuee;
    private StringRequest stringRequest;
    private String url = "http://www.mocky.io/v2/5ccbd1b6330000e812e01882";
    private static final String TAG = MainActivity.class.getName();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

//        txt = (TextView)findViewById(R.id.txt);
        btn = (Button)findViewById(R.id.btn);

        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                sendRequestAndPrintResponse();
            }
        });
    }

    private void sendRequestAndPrintResponse() {
        mRequestQuee = Volley.newRequestQueue(this);
        stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                Log.i(TAG, "Response: " + response.toString());
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.i(TAG, "Error: " + error.toString());
            }
        });
        mRequestQuee.add(stringRequest);
    }
}
