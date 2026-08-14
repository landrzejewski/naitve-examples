package pl.training

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.Arguments
import com.facebook.react.module.annotations.ReactModule
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import java.util.TimeZone

@ReactModule(name = NativeLocalDateModule.NAME)
class NativeLocalDateModule(reactContext: ReactApplicationContext) : NativeLocalDateSpec(reactContext) {

    override fun getName(): String = NAME

    override fun getDate(format: String): String = formatNow(format)
    override fun getDateAsync(format: String, promise: Promise) {
        try {
            promise.resolve(formatNow(format))
        } catch (e: IllegalArgumentException) {
            promise.reject("INVALID_FORMAT", "Nieprawidłowy format daty: $format", e)
        }
    }

    private fun formatNow(format: String): String =
        SimpleDateFormat(format, Locale.getDefault()).format(Date())

    companion object {
        const val NAME = "LocalDate"
    }
}
