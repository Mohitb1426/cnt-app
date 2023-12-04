package com.click_n_tokk;
import android.os.Bundle;
import android.os.Build;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
   @Override
    protected void onCreate(Bundle savedInstanceState) {
       SplashScreen.show(this, true);
       super.onCreate(null);
       if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O_MR1) {
        setShowWhenLocked(true);
    }
   }
  @Override
  protected String getMainComponentName() {
    return "click_n_tokk";
  }
}
